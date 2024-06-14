import { PlainMessage } from "@bufbuild/protobuf";
import { CosmwasmWasmV1MsgUpdateAdmin as ProtoMsgUpdateAdmin } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgUpdateAdmin>>;

export class MsgUpdateAdmin implements Adapter {
  private readonly data: Data;
  private readonly legacy: boolean;

  constructor(data: Data, legacy = false) {
    this.data = data;
    this.legacy = legacy;
  }

  public toProto() {
    return new ProtoMsgUpdateAdmin({
      ...this.data,
    });
  }

  public toAmino() {
    return {
      type: this.legacy ? "wasm/MsgUpdateContractAdmin" : "wasm/MsgUpdateAdmin",
      value: {
        ...this.legacy ? {
          admin: this.data.sender
        } : {
          sender: this.data.sender
        },
        new_admin: this.data.newAdmin,
        contract: this.data.contract
      }
    };
  }
}
