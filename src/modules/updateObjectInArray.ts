import _ from 'lodash';

export default function updateObjectInArray<ObjectShape>(initialArray: ObjectShape[],
                                                         keyToFind: number,
                                                         keyValueToFind: ObjectShape,
                                                         patch: Partial<ObjectShape>): ObjectShape[] {
  const clonedArr = _.cloneDeep(initialArray);

  if (_.isEqual(clonedArr[keyToFind], keyValueToFind)) {
    for (let key in patch) {
      if (patch[key])
        clonedArr[keyToFind][key] = patch[key]!;
    }
  }

  return clonedArr;
}