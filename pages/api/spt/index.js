import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllSpts,
  saveSpt,
} from "../../../controller/spt/spt";
const handler = nc(onError);
handler.get(getAllSpts);
handler.post(saveSpt);
export default handler;
