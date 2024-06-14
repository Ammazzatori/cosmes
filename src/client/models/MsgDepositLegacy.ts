import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosGovV1beta1MsgDeposit as ProtoMsgDeposit } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgDeposit>>;

export class MsgDepositLegacy implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgDeposit(this.data);
  }

  public toAmino() {
    return {
      type: "gov/MsgDeposit",
      value: {
        proposal_id: this.data.proposalId.toString(),
        amount: this.data.amount,
        depositor: this.data.depositor,
      },
    };
  }
}