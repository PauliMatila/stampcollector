import Stamp from './Stamp'

export var stampCollection = []

let initDataManager = () => {
  var stamp1 = new Stamp(
    'Lp type 2-3-1',
    1979,
    true,
    'https://upload.wikimedia.org/wikipedia/commons/8/82/Steam_Locomotive_Lp_type_2-3-1_on_1979_USSR_Stamp.jpg'
  );
  var stamp2 = new Stamp(
    'Burkina Faso',
    1985,
    true,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6-njrMvMcUWWCkzVA2V0bsSope_n0tUfyw6qdIOYFkDKTvNe7&usqp=CAU'
  );
  var stamp3 = new Stamp(
    'Dampflokomotive "Pioneer"',
    1979,
    true,
    'https://i.pinimg.com/236x/7a/f3/5d/7af35d0f123d8e1ea7e0558d63ec481b--north-western-busses.jpg'
  );
  stampCollection.push(stamp1, stamp2, stamp3);
}

export default initDataManager