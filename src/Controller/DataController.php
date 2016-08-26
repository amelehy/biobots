<?php
namespace App\Controller;

use App\Controller\AppController;

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
    $json = json_encode(array(
      'status' => 'success', 
      'message' => 'success'
    ));
    $this->response->type('application/json');
    $this->response->body($json);
    return $this->response;
  }
}
