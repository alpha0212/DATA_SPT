import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllSpts,
  saveSpt,
  getAllUsers,
  saveUser,
} from "../../../controller/spt/spt";
const handler = nc(onError);
handler.get(getAllSpts);
handler.get(getAllUsers);
handler.post(saveUser);
handler.post(saveSpt);
export default handler;
