import Users from './model';
import UserSerializers from './serializers';

const UserController = {
  getAll(req, res) {
    res.json({
      users: UserSerializers.for('getAll', Users.findAll())
    })
  },
  get(req, res) {
    res.json({
      user: UserSerializers.for('get', Users.find(req.params.id))
    })
  },
  create(req, res) {
    const user = Users.create({email: req.body.email});
    res.json({
      user: UserSerializers.for('create', user)
    })
  }
};

export default UserController;