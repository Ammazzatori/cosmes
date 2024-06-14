import { PlainMessage } from "@bufbuild/protobuf";
import { CosmwasmWasmV1MsgClearAdmin as ProtoMsgClearAdmin } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgClearAdmin>>;

export class MsgClearAdmin implements Adapter {
  private readonly data: Data;
  private readonly legacy: boolean;

  constructor(data: Data, legacy = false) {
    this.data = data;
    this.legacy = legacy;
  }

  public toProto() {
    return new ProtoMsgClearAdmin({
      ...this.data,
    });
  }

  public toAmino() {
    return {
      type: this.legacy ? "wasm/MsgClearContractAdmin" : "wasm/MsgClearAdmin",
      value: {
        ...this.legacy ? {
          admin: this.data.sender
        } : {
          sender: this.data.sender
        },
        contract: this.data.contract
      }
    };
  }
}
