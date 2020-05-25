import Stamp from './Stamps/Stamp'

var stampCollection = []

let initDataManager = () => {
  var stamp1 = new Stamp(
    'Lp type 2-3-1',
    3.50,
    'USSR',
    1979,
    true,
    'https://upload.wikimedia.org/wikipedia/commons/8/82/Steam_Locomotive_Lp_type_2-3-1_on_1979_USSR_Stamp.jpg'
  );
  var stamp2 = new Stamp(
    'VL-60k',
    7.30,
    'USSR',
    1966,
    true,
    'https://comps.canstockphoto.com/post-stamp-with-russian-electric-picture_csp7622851.jpg'
  );
  var stamp3 = new Stamp(
    'Achsfolge 2-2-2',
    6.20,
    'Hungary',
    1979,
    true,
    'https://i.pinimg.com/236x/7a/f3/5d/7af35d0f123d8e1ea7e0558d63ec481b--north-western-busses.jpg'
  );
  stampCollection.push(stamp1, stamp2, stamp3);
}

export default {initDataManager, stampCollection}