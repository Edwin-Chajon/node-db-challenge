exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name')
        .notNullable()
        .unique()
        .index();
      tbl.string('description')
         .unique();
      tbl.boolean('completed')
         .defaultTo("false");
    })
  
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description')
        .notNullable()
        .unique()
        .index();
      tbl.string('notes');
      tbl.integer('project_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('projects');
      tbl.boolean('completed')
         .defaultTo("false");
    })
  
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name')
        .notNullable()
        .unique()
        .index();
      tbl.string('description');
    })

    .createTable('manyToMany', tbl => {
        tbl.primary(["project_id", "resource_id"]);
        tbl.integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl.integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('resources')
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('manyToMany')
  };
  