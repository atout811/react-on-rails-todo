# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_16_195506) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "permissions", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.timestamptz "createdAt", null: false
    t.timestamptz "updatedAt", null: false
  end

  create_table "role_permissions", id: :serial, force: :cascade do |t|
    t.timestamptz "createdAt", null: false
    t.timestamptz "updatedAt", null: false
    t.integer "permission_id"
    t.integer "role_id"
    t.index ["permission_id", "role_id"], name: "role_permissions_permission_id_role_id_key", unique: true
  end

  create_table "roles", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.timestamptz "createdAt", null: false
    t.timestamptz "updatedAt", null: false
  end

  create_table "todos", force: :cascade do |t|
    t.string "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_roles", id: :serial, force: :cascade do |t|
    t.timestamptz "createdAt", null: false
    t.timestamptz "updatedAt", null: false
    t.integer "user_id"
    t.integer "role_id"
    t.index ["user_id", "role_id"], name: "user_roles_user_id_role_id_key", unique: true
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.string "email", limit: 255, null: false
    t.integer "age", null: false
    t.string "organization", limit: 255
    t.timestamptz "last_login"
    t.timestamptz "createdAt", null: false
    t.timestamptz "updatedAt", null: false
  end

end
