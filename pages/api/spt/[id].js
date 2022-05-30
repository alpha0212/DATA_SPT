import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getSptById,
  deleteSptById,
  updateSpt,
} from "../../../controller/spt/spt";

const handler = nc({ onError });
handler.get(getSptById);
handler.delete(deleteSptById);
handler.put(updateSpt);
export default handler;
