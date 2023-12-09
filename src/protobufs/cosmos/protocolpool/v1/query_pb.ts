// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/protocolpool/v1/query.proto (package cosmos.protocolpool.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin, DecCoin } from "../../base/v1beta1/coin_pb.js";

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 *
 * @generated from message cosmos.protocolpool.v1.QueryCommunityPoolRequest
 */
export class QueryCommunityPoolRequest extends Message<QueryCommunityPoolRequest> {
  constructor(data?: PartialMessage<QueryCommunityPoolRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.protocolpool.v1.QueryCommunityPoolRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommunityPoolRequest {
    return new QueryCommunityPoolRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommunityPoolRequest {
    return new QueryCommunityPoolRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommunityPoolRequest {
    return new QueryCommunityPoolRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCommunityPoolRequest | PlainMessage<QueryCommunityPoolRequest> | undefined, b: QueryCommunityPoolRequest | PlainMessage<QueryCommunityPoolRequest> | undefined): boolean {
    return proto3.util.equals(QueryCommunityPoolRequest, a, b);
  }
}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 *
 * @generated from message cosmos.protocolpool.v1.QueryCommunityPoolResponse
 */
export class QueryCommunityPoolResponse extends Message<QueryCommunityPoolResponse> {
  /**
   * pool defines community pool's coins.
   *
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin pool = 1;
   */
  pool: DecCoin[] = [];

  constructor(data?: PartialMessage<QueryCommunityPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.protocolpool.v1.QueryCommunityPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommunityPoolResponse {
    return new QueryCommunityPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommunityPoolResponse {
    return new QueryCommunityPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommunityPoolResponse {
    return new QueryCommunityPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCommunityPoolResponse | PlainMessage<QueryCommunityPoolResponse> | undefined, b: QueryCommunityPoolResponse | PlainMessage<QueryCommunityPoolResponse> | undefined): boolean {
    return proto3.util.equals(QueryCommunityPoolResponse, a, b);
  }
}

/**
 * QueryUnclaimedBudgetRequest is the request type for the Query/UnclaimedBudgetRequest
 * RPC method.
 *
 * @generated from message cosmos.protocolpool.v1.QueryUnclaimedBudgetRequest
 */
export class QueryUnclaimedBudgetRequest extends Message<QueryUnclaimedBudgetRequest> {
  /**
   * address is the recipient address to query unclaimed budget amount for.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QueryUnclaimedBudgetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.protocolpool.v1.QueryUnclaimedBudgetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnclaimedBudgetRequest {
    return new QueryUnclaimedBudgetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnclaimedBudgetRequest {
    return new QueryUnclaimedBudgetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnclaimedBudgetRequest {
    return new QueryUnclaimedBudgetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryUnclaimedBudgetRequest | PlainMessage<QueryUnclaimedBudgetRequest> | undefined, b: QueryUnclaimedBudgetRequest | PlainMessage<QueryUnclaimedBudgetRequest> | undefined): boolean {
    return proto3.util.equals(QueryUnclaimedBudgetRequest, a, b);
  }
}

/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/UnclaimedBudget
 * RPC method.
 *
 * @generated from message cosmos.protocolpool.v1.QueryUnclaimedBudgetResponse
 */
export class QueryUnclaimedBudgetResponse extends Message<QueryUnclaimedBudgetResponse> {
  /**
   * total_budget is the total budget allocated to the recipient
   *
   * @generated from field: cosmos.base.v1beta1.Coin total_budget = 1;
   */
  totalBudget?: Coin;

  /**
   * claimed_amount is the budget amount already claimed by the recipient
   *
   * @generated from field: cosmos.base.v1beta1.Coin claimed_amount = 2;
   */
  claimedAmount?: Coin;

  /**
   * unclaimed_amount is the remaining budget amount that is unclaimed by the recipient
   *
   * @generated from field: cosmos.base.v1beta1.Coin unclaimed_amount = 3;
   */
  unclaimedAmount?: Coin;

  /**
   * next_claim_from is the next starting claim time for fund distribution.
   * It represents the time when we can claim funds after the period time interval has passed.
   *
   * @generated from field: google.protobuf.Timestamp next_claim_from = 4;
   */
  nextClaimFrom?: Timestamp;

  /**
   * period is the time interval for fund distribution
   *
   * @generated from field: google.protobuf.Duration period = 5;
   */
  period?: Duration;

  /**
   * tranches_left is the number of tranches left for the amount to be distributed
   *
   * @generated from field: uint64 tranches_left = 6;
   */
  tranchesLeft = protoInt64.zero;

  constructor(data?: PartialMessage<QueryUnclaimedBudgetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.protocolpool.v1.QueryUnclaimedBudgetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_budget", kind: "message", T: Coin },
    { no: 2, name: "claimed_amount", kind: "message", T: Coin },
    { no: 3, name: "unclaimed_amount", kind: "message", T: Coin },
    { no: 4, name: "next_claim_from", kind: "message", T: Timestamp },
    { no: 5, name: "period", kind: "message", T: Duration },
    { no: 6, name: "tranches_left", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnclaimedBudgetResponse {
    return new QueryUnclaimedBudgetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnclaimedBudgetResponse {
    return new QueryUnclaimedBudgetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnclaimedBudgetResponse {
    return new QueryUnclaimedBudgetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryUnclaimedBudgetResponse | PlainMessage<QueryUnclaimedBudgetResponse> | undefined, b: QueryUnclaimedBudgetResponse | PlainMessage<QueryUnclaimedBudgetResponse> | undefined): boolean {
    return proto3.util.equals(QueryUnclaimedBudgetResponse, a, b);
  }
}
