/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagedEnvironments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ManagedEnvironment,
  ManagedEnvironmentsListBySubscriptionNextOptionalParams,
  ManagedEnvironmentsListBySubscriptionOptionalParams,
  ManagedEnvironmentsListByResourceGroupNextOptionalParams,
  ManagedEnvironmentsListByResourceGroupOptionalParams,
  ManagedEnvironmentsListBySubscriptionResponse,
  ManagedEnvironmentsListByResourceGroupResponse,
  ManagedEnvironmentsGetOptionalParams,
  ManagedEnvironmentsGetResponse,
  ManagedEnvironmentsCreateOrUpdateOptionalParams,
  ManagedEnvironmentsCreateOrUpdateResponse,
  ManagedEnvironmentsDeleteOptionalParams,
  ManagedEnvironmentPatch,
  ManagedEnvironmentsUpdateOptionalParams,
  ManagedEnvironmentsUpdateResponse,
  ManagedEnvironmentsListBySubscriptionNextResponse,
  ManagedEnvironmentsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedEnvironments operations. */
export class ManagedEnvironmentsImpl implements ManagedEnvironments {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ManagedEnvironments class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get all Managed Environments for a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ManagedEnvironmentsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ManagedEnvironment> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ManagedEnvironmentsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ManagedEnvironment[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ManagedEnvironmentsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ManagedEnvironment> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all the Managed Environments in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedEnvironmentsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ManagedEnvironment> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ManagedEnvironmentsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ManagedEnvironment[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ManagedEnvironmentsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ManagedEnvironment> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all Managed Environments for a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ManagedEnvironmentsListBySubscriptionOptionalParams
  ): Promise<ManagedEnvironmentsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Get all the Managed Environments in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedEnvironmentsListByResourceGroupOptionalParams
  ): Promise<ManagedEnvironmentsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get the properties of a Managed Environment used to host container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: ManagedEnvironmentsGetOptionalParams
  ): Promise<ManagedEnvironmentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a Managed Environment used to host container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Environment.
   * @param environmentEnvelope Configuration details of the Environment.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    environmentEnvelope: ManagedEnvironment,
    options?: ManagedEnvironmentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedEnvironmentsCreateOrUpdateResponse>,
      ManagedEnvironmentsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedEnvironmentsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, name, environmentEnvelope, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a Managed Environment used to host container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Environment.
   * @param environmentEnvelope Configuration details of the Environment.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    environmentEnvelope: ManagedEnvironment,
    options?: ManagedEnvironmentsCreateOrUpdateOptionalParams
  ): Promise<ManagedEnvironmentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      name,
      environmentEnvelope,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a Managed Environment if it does not have any container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Environment.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    name: string,
    options?: ManagedEnvironmentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, name, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Managed Environment if it does not have any container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Environment.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: ManagedEnvironmentsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, name, options);
    return poller.pollUntilDone();
  }

  /**
   * Patches a Managed Environment. Only patching of tags is supported currently
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Environment.
   * @param environmentEnvelope Configuration details of the Environment.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    environmentEnvelope: ManagedEnvironmentPatch,
    options?: ManagedEnvironmentsUpdateOptionalParams
  ): Promise<ManagedEnvironmentsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, environmentEnvelope, options },
      updateOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ManagedEnvironmentsListBySubscriptionNextOptionalParams
  ): Promise<ManagedEnvironmentsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ManagedEnvironmentsListByResourceGroupNextOptionalParams
  ): Promise<ManagedEnvironmentsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.App/managedEnvironments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedEnvironmentsCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedEnvironmentsCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedEnvironment
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedEnvironment
    },
    201: {
      bodyMapper: Mappers.ManagedEnvironment
    },
    202: {
      bodyMapper: Mappers.ManagedEnvironment
    },
    204: {
      bodyMapper: Mappers.ManagedEnvironment
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.environmentEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedEnvironment
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.environmentEnvelope1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedEnvironmentsCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedEnvironmentsCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};