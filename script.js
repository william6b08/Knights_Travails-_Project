function knightMove(startCoordinate, endCoordinate){
  // function will take an array with two elements as argument [num1, num2]
  // index 0 represent horizontal move
  // index 1 represent vertical move

  //rule: knight can move two step forward and one step to a side
  // i.e. [num1 + 1, num2 + 2] or [num1 + 2, num2 + 1]

  // this function return the coordinate of each turn.
  
  //implementation: the most simple case:

  //option 1, for each cooridinate, spawn 8 possible coordinate

  let allpossibleRoutes = [];
  let checkpoint= [];
  //let endpointDelta = endCoordinate[0] + endCoordinate[1]
  
  // move up 2 and turn right 1
  allpossibleRoutes.push([startCoordinate[0]+1, startCoordinate[1]+2])
  //move up 2 and turn left 1
  allpossibleRoutes.push([startCoordinate[0]-1, startCoordinate[1]+2])

  //move left 2 and turn right 1
  allpossibleRoutes.push([startCoordinate[0]-2, startCoordinate[1]+1])
  //move left 2 and turn left 1
  allpossibleRoutes.push([startCoordinate[0]-2, startCoordinate[1]-1])

  //move down 2 and turn right 1
  allpossibleRoutes.push([startCoordinate[0]-1, startCoordinate[1]+2])
  //move down 2 and turn left 1
  allpossibleRoutes.push([startCoordinate[0]+1, startCoordinate[1]-2])

  //move right 2 and turn right 1
  allpossibleRoutes.push([startCoordinate[0]+2, startCoordinate[1]-1])
  allpossibleRoutes.push([startCoordinate[0]+2, startCoordinate[1]+1])

  let ans = false;
  for(route of allpossibleRoutes){
    if(route[0] == endCoordinate[0] && route[1] == endCoordinate[1]){
      checkpoint.push(...route);
      ans = !ans;
    }
  }

  if(ans){
    return checkpoint;
  }

  else{
    let possibleAns = [1,2];
    checkpoint.push(possibleAns);
    checkpoint.push(knightMove(possibleAns, endCoordinate));
    return checkpoint;
  }
  //for(route of allpossibleRoutes){
  checkpoint = checkpoint.concat(knightMove([1,2], endCoordinate));
  //}
  return checkpoint;
  // if the endCoordinate is not present in allpossibleRoutes, we will calculate and save its delta
  // for(route of allpossibleRoutes){
  //   route.delta = route[0] + route[1]
  //   console.log(route);
  // }


}

console.log(knightMove([0,0],[3,3]))
