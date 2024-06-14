import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosSlashingV1beta1MsgUnjail as ProtoMsgUnjail } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgUnjail>>;

export class MsgUnjail implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgUnjail(this.data);
  }

  public toAmino() {
    return {
      type: "slashing/MsgUnjail",
      value: {
        validator_addr: this.data.validatorAddr
      },
    };
  }
}