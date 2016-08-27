<?php
  /**
   * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
   * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
   *
   * Licensed under The MIT License
   * For full copyright and license information, please see the LICENSE.txt
   * Redistributions of files must retain the above copyright notice.
   *
   * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
   * @link          http://cakephp.org CakePHP(tm) Project
   * @since         0.10.0
   * @license       http://www.opensource.org/licenses/mit-license.php MIT License
   */
  use Cake\Cache\Cache;
  use Cake\Core\Configure;
  use Cake\Core\Plugin;
  use Cake\Datasource\ConnectionManager;
  use Cake\Error\Debugger;
  use Cake\Network\Exception\NotFoundException;

  $this->layout = false;
?>

<!DOCTYPE html>
<html>
  <head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?= $this->Html->css('style.min.css') ?>
    <link rel="stylesheet" type="text/css" href="/assets/get_external_asset/<?= base64_encode('node_modules/react-bootstrap-table/css/react-bootstrap-table-all.min.css'); ?>">
  </head>
  <body>
    <div id="app-container" class="container-fluid"></div>
  </body>
  <script src="/assets/get_external_asset/<?= base64_encode('node_modules/react/dist/react.min.js'); ?>"></script>
  <script src="/assets/get_external_asset/<?= base64_encode('node_modules/react-dom/dist/react-dom.min.js'); ?>"></script>
  <script src="/assets/get_external_asset/<?= base64_encode('node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.js'); ?>"></script>
  <script src="/assets/get_external_asset/<?= base64_encode('node_modules/jquery/dist/jquery.min.js'); ?>"></script>
  <?= $this->Html->script('build/application.min.js') ?>
</html>
