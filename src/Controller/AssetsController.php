<?php
namespace App\Controller;

use App\Controller\AppController;
/**
 * Data Controller
 *
 */
class AssetsController extends AppController
{
  /**
   * GetExternalAsset method
   *
   * @param none.
   * @return \Cake\Network\Response|null
   */
  public function getExternalAsset($path)
  {
    $this->response->file(base64_decode($path));
    return $this->response;
  }
}
