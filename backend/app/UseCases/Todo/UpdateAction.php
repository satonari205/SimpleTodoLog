<?php

namespace App\UseCases\Todo;

use App\Models\Todo;

class UpdateAction
{
  public function __invoke(Todo $todo)
  {
    $todo->done = (bool) true;
    $todo->save();
    return $todo;
  }
}
