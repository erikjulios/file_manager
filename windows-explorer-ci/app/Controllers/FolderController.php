<?php

namespace App\Controllers;

use App\Models\FolderModel;

class FolderController extends BaseController
{
    public function index($parentId = null)
    {
        $model = new FolderModel();
        $data = $model->getFolders($parentId);
        return $this->response->setJSON($data);
    }
}
