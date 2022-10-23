/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
export default function convertBytesToHuman(bytes) {
  
  if (typeof(bytes) != 'number')
    return false;

  if (bytes < 0)
    return false;

  if (bytes >= 1073741824) {
    bytes = (bytes / 1073741824).toFixed(2) + " GB"; 
  }
  else if (bytes >= 1048576) {    
    bytes = (bytes / 1048576).toFixed(2) + " MB";
  }
  else if (bytes >= 1024) {     
    bytes = (bytes / 1024).toFixed(2) + " KB"; 
  }
  else if (bytes > 1) {          
    bytes = bytes + " bytes"; 
  }
  else if (bytes == 1) {          
    bytes = bytes + " byte"; 
  }
  else {                       
    bytes = "0 bytes"; 
  }
  return bytes;
}