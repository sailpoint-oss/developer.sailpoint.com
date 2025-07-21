---
id: v2025-access-request
title: AccessRequest
pagination_label: AccessRequest
sidebar_label: AccessRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequest', 'V2025AccessRequest'] 
slug: /tools/sdk/go/v2025/models/access-request
tags: ['SDK', 'Software Development Kit', 'AccessRequest', 'V2025AccessRequest']
---

# AccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]string** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. | 
**RequestType** | Pointer to [**NullableAccessRequestType**](access-request-type) |  | [optional] 
**RequestedItems** | [**[]AccessRequestItem**](access-request-item) |  | 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**RequestedForWithRequestedItems** | Pointer to [**[]RequestedForDtoRef**](requested-for-dto-ref) | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when 'requestedFor' and 'requestedItems' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source * Allows the ability to request items with different remove dates * Also allows different combinations of request items and identities in the same request * Only for use in GRANT_ACCESS type requests  | [optional] 

## Methods

### NewAccessRequest

`func NewAccessRequest(requestedFor []string, requestedItems []AccessRequestItem, ) *AccessRequest`

NewAccessRequest instantiates a new AccessRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestWithDefaults

`func NewAccessRequestWithDefaults() *AccessRequest`

NewAccessRequestWithDefaults instantiates a new AccessRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedFor

`func (o *AccessRequest) GetRequestedFor() []string`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccessRequest) GetRequestedForOk() (*[]string, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccessRequest) SetRequestedFor(v []string)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestType

`func (o *AccessRequest) GetRequestType() AccessRequestType`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *AccessRequest) GetRequestTypeOk() (*AccessRequestType, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *AccessRequest) SetRequestType(v AccessRequestType)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *AccessRequest) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *AccessRequest) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *AccessRequest) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequestedItems

`func (o *AccessRequest) GetRequestedItems() []AccessRequestItem`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *AccessRequest) GetRequestedItemsOk() (*[]AccessRequestItem, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *AccessRequest) SetRequestedItems(v []AccessRequestItem)`

SetRequestedItems sets RequestedItems field to given value.


### GetClientMetadata

`func (o *AccessRequest) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccessRequest) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccessRequest) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccessRequest) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetRequestedForWithRequestedItems

`func (o *AccessRequest) GetRequestedForWithRequestedItems() []RequestedForDtoRef`

GetRequestedForWithRequestedItems returns the RequestedForWithRequestedItems field if non-nil, zero value otherwise.

### GetRequestedForWithRequestedItemsOk

`func (o *AccessRequest) GetRequestedForWithRequestedItemsOk() (*[]RequestedForDtoRef, bool)`

GetRequestedForWithRequestedItemsOk returns a tuple with the RequestedForWithRequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedForWithRequestedItems

`func (o *AccessRequest) SetRequestedForWithRequestedItems(v []RequestedForDtoRef)`

SetRequestedForWithRequestedItems sets RequestedForWithRequestedItems field to given value.

### HasRequestedForWithRequestedItems

`func (o *AccessRequest) HasRequestedForWithRequestedItems() bool`

HasRequestedForWithRequestedItems returns a boolean if a field has been set.

### SetRequestedForWithRequestedItemsNil

`func (o *AccessRequest) SetRequestedForWithRequestedItemsNil(b bool)`

 SetRequestedForWithRequestedItemsNil sets the value for RequestedForWithRequestedItems to be an explicit nil

### UnsetRequestedForWithRequestedItems
`func (o *AccessRequest) UnsetRequestedForWithRequestedItems()`

UnsetRequestedForWithRequestedItems ensures that no value is present for RequestedForWithRequestedItems, not even an explicit nil

