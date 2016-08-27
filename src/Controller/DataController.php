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
    $response = json_encode(array(
      'error' => false, 
      'message' => $this->__formatData($file->read())
    ));
    $this->response->type('application/json');
    $this->response->body($response);
    return $this->response;
  }

  private function __formatData($data){
    // return var_dump(json_decode($data));
    return array_map(function($printJobObj){
      return array(
        'username' => $printJobObj->user_info->email,
        'serial' => $printJobObj->user_info->serial,
        'input_file' => $printJobObj->print_info->files->input,
        'output_file' => $printJobObj->print_info->files->output,
        'cl_enabled' => ($printJobObj->print_info->crosslinking->cl_enabled) ? 'true' : 'false', 
        'cl_duration' => $printJobObj->print_info->crosslinking->cl_duration,
        'cl_intensity' => $printJobObj->print_info->crosslinking->cl_intensity, 
        'pressure_ex_1' => $printJobObj->print_info->pressure->extruder1, 
        'pressure_ex_2' => $printJobObj->print_info->pressure->extruder2,
        'res_layer_height' => $printJobObj->print_info->resolution->layerHeight, 
        'res_layer_num' => $printJobObj->print_info->resolution->layerNum, 
        'wellplate' => $printJobObj->print_info->wellplate, 
        'live_percent' => $printJobObj->print_data->livePercent, 
        'elasticity' => $printJobObj->print_data->elasticity, 
        'dead_percent' => $printJobObj->print_data->deadPercent
      );
    }, json_decode($data));
  }
}
