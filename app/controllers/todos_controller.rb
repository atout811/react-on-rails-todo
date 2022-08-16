# frozen_string_literal: true

class TodosController < ApplicationController
  layout "todos"
  protect_from_forgery with: :null_session

  def index
    @todos = Todos.all
  end
  
  def create
    @todo = Todos.new
    puts params["text"]
    @todo.text = params["text"]
    puts @todo.text
    @todo.save!
    render plain: @todo.to_json
end

def delete
    puts params
    @todo = Todos.find(params["id"])
    @todo.destroy
end
end
