<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Filesystem\File;
/**
 * Data Controller
 *
 */
class DataController extends AppController
{
  /**
   * GetBioPrintData method
   *
   * @param none.
   * @return \Cake\Network\Response|null
   */
  public function getBioPrintData()
  {
    $file = new File('./data/bioprint-data.json');
    $jsonResponse = json_encode(array(
      'status' => 'success', 
      'message' => json_decode($file->read())
    ));
    $this->response->type('application/json');
    $this->response->body($jsonResponse);
    return $this->response;
  }
}
