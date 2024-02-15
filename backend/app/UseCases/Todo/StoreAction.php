<?php

  namespace App\UseCases\Todo;

  use App\Models\Todo;

  class StoreAction
  {
    public function __invoke(Todo $todo)
    {
      $todo->save();
      return $todo;
    }
  }
