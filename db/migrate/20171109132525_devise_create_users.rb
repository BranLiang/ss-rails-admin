class DeviseCreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
      t.string :name,               null: false, default: "Anonymous"
      t.boolean :admin,             null: false, default: false

      t.timestamps null: false
    end
    add_index :users, :email,                unique: true
  end
end
