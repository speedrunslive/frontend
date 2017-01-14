<?php

  define('CACHE_DISABLED', true);

  function read_cache($file, $ttl = null) {
    if ((CACHE_DISABLED == true) && (FORCE_CACHE !== true)) return false;
    $path = "{$_SERVER['DOCUMENT_ROOT']}/cache/$file";
    if (!file_exists($path)) {
      //trigger_error("Cache $file is missing", E_USER_NOTICE);
      return false;
    }
    if (is_numeric($ttl)) {
      $next_update = ( filemtime($path) + ($ttl * 60) );
      $time_left = $next_update - time();
    } else {
      $next_update = time() + 1;
      $time_left = 1;
    }
    if ($time_left > 0) {
      if (is_readable($path)) return file_get_contents($path);
      else {
        trigger_error("$file could not be read.", E_USER_WARNING);
        return false;
      }
    } else {
      //trigger_error("Cache $file died at ". date('g:i:s', $next_update) .'.', E_USER_NOTICE);
      return false;
    }
  }
  
  function write_cache($file, $data, $clobber = false) {
    if ((CACHE_DISABLED == true) && (FORCE_CACHE !== true)) return false;
    $path = "{$_SERVER['DOCUMENT_ROOT']}/cache/$file";
    $dir_exists = is_dir(dirname($path));
    if (!$dir_exists) {
      // Make the cache directory if it doesn't exist
      $old = umask(0);
      if (($dir_exists = mkdir(dirname($path), 0777, true)) === false) {
        trigger_error("Could not create cache directory: $php_errormsg", E_USER_WARNING);
        umask($old);
        return false;
      }
      umask($old);
    }
    if ($dir_exists) {
      if ( (!file_exists($path)) || ($clobber) ) {
        if ( (file_exists($path)) && (!is_writable($path)) ) {
          trigger_error("Cache $file reported as unwritable by the filesystem.", E_USER_WARNING);
          return false;
        }
        if (file_put_contents($path, $data)) {
          chmod($path, 0666);
          return true;
        }
        else {
          trigger_error("Could not write cache $file: $php_errormsg", E_USER_WARNING);
          return false;
        }
      } else {
        //trigger_error("Cache $file already exists.", E_USER_NOTICE);
        return false;
      }
    }
  }
  
  function delete_cache() {
    foreach (func_get_args() as $file) {
      $path = "{$_SERVER['DOCUMENT_ROOT']}/cache/$file";
      if (file_exists($path)) {
        if ( (!is_writable($path)) || (!unlink($path)) ) {
          trigger_error("Cache $file exists but cannot be deleted.", E_USER_WARNING);
          return false;
        }
        else return true;
      } else return true;
    }
  }
  
  function delete_full_cache() {
    unlinkRecursive("{$_SERVER['DOCUMENT_ROOT']}/cache");
  }
  
  function cache_message() {
    return '<!-- Cached at '.date('g:i:sa d M Y').'. -->';
  }
  
  function unlinkRecursive($dir, $deleteRootToo = false) {
    if(!$dh = @opendir($dir)) return;
    while (false !== ($obj = readdir($dh))) {
      if($obj == '.' || $obj == '..') continue;
      if (!@unlink($dir . '/' . $obj)) unlinkRecursive($dir.'/'.$obj, true);
    }
    closedir($dh);
    if ($deleteRootToo) @rmdir($dir);
    return;
  }
