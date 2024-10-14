<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class CorsFilter implements FilterInterface
{
    // public function before(RequestInterface $request, $arguments = null)
    // {
    //     // Set header CORS
    //     header('Access-Control-Allow-Origin: *');
    //     header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    //     header('Access-Control-Allow-Headers: Content-Type, Authorization');

    //     // Handle preflight requests
    //     if ($request->getMethod() === 'options') {
    //         return $this->responseOptions();
    //     }
    // }
    public function before(RequestInterface $request, $arguments = null)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if ($request->getMethod() === 'options') {
            return $this->responseOptions();
        }
    }


    // private function responseOptions()
    // {
    //     // Menyediakan respons untuk permintaan OPTIONS
    //     return (new \CodeIgniter\HTTP\Response())
    //         ->setStatusCode(200)
    //         ->setHeader('Access-Control-Allow-Origin', '*')
    //         ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    //         ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    //         ->setBody('');
    // }
    private function responseOptions()
    {
        return (new \CodeIgniter\HTTP\Response())
            ->setStatusCode(200)
            ->setHeader('Access-Control-Allow-Origin', '*')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
            ->setBody('');
    }


    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Tidak ada operasi setelahnya
    }
}
