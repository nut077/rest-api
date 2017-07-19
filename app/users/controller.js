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
    const {email, password} = req.body;
    Users.create(email, password).then(
      user =>
        res
          .header('Authorization', `Bearer ${Users.genToken(user)}`)
          .status(201)
          .json({
        user: UserSerializers.for('create', user)
      })
    )
  }
};

export default UserController;