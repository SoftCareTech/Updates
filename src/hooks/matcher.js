export default (
  oldData = null,
  newData = null,
  global = false,
  conditions = []
) => {
  //inint data
  let result = { updated: false, changes: 0, name: 'Non' };

  ////  validting input
  if (newData) {
    if (global) {
      if (oldData) {
        ///data fine
      } else {
        result.name =
          'DataError:oldData param 1 is undefined -- and global is true. fun(oldData, newData, global,conditions)';
        return result;
      }
    } else {
      if (conditions) {
        if (conditions.length > 0) {
          //data fine
        } else {
          result.name =
            'DataError:Conditions  param 4 have length less than zero -- and param 3(global) is false. fun(oldData, newData, global, conditions)';
          return result;
        }
      } else {
        result.name =
          'DataError:Condions  param 4 is undefined -- and param 3(global) is false. fun(oldData, newData, global, conditions)';
        return result;
      }
    }
  } else {
    result.name =
      'DataError:New data param 2 is undefined, it must be provided ';
    return result;
  }

  ///// matching
  if (global) {
    if (oldData.toLowerCase() ===newData.toLowerCase()) {
      result.updated = true;
      result.changes = 1;
      result.name = 'global';
      return result;
    } else{
       result.updated = false;
      result.changes = 0;
      result.name = 'global';
    }
  } else { 
      result.name = 'conditions';
      newData= newData.toLowerCase()
    for (var i = 0; i < conditions.length; i++) {
      let condition = conditions[i];
      if (condition.exist) {
        if (newData.includes(condition.text.toLowerCase())){ 
           result.updated = true;
         result.changes += 1;}
      } else {
        if (newData.includes(condition.text.toLowerCase()) == false){  result.updated = true;
         result.changes += 1;}
      }
    }
  }

  return result;
};
