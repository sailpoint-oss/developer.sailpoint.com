---
id: v2025-requested-item-dto-ref
title: RequestedItemDtoRef
pagination_label: RequestedItemDtoRef
sidebar_label: RequestedItemDtoRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestedItemDtoRef', 'V2025RequestedItemDtoRef'] 
slug: /tools/sdk/go/v2025/models/requested-item-dto-ref
tags: ['SDK', 'Software Development Kit', 'RequestedItemDtoRef', 'V2025RequestedItemDtoRef']
---

# RequestedItemDtoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of the item being requested. | 
**Id** | **string** | ID of Role, Access Profile or Entitlement being requested. | 
**Comment** | Pointer to **string** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**RemoveDate** | Pointer to **SailPointTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date in the future. * The current SLA for the deprovisioning is 24 hours. * This date can be modified to either extend or decrease the duration of access item assignments for the specified identity. You can change the expiration date for requests for yourself or direct reports, but you cannot remove an expiration date on an already approved item. If the access request has not been approved, you can cancel it and submit a new one without the expiration. If it has already been approved, then you have to revoke the access and then re-request without the expiration.  | [optional] 
**AccountSelection** | Pointer to [**[]SourceItemRef**](source-item-ref) | The accounts where the access item will be provisioned to * Includes selections performed by the user in the event of multiple accounts existing on the same source * Also includes details for sources where user only has one account  | [optional] 

## Methods

### NewRequestedItemDtoRef

`func NewRequestedItemDtoRef(type_ string, id string, ) *RequestedItemDtoRef`

NewRequestedItemDtoRef instantiates a new RequestedItemDtoRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedItemDtoRefWithDefaults

`func NewRequestedItemDtoRefWithDefaults() *RequestedItemDtoRef`

NewRequestedItemDtoRefWithDefaults instantiates a new RequestedItemDtoRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RequestedItemDtoRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RequestedItemDtoRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RequestedItemDtoRef) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *RequestedItemDtoRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RequestedItemDtoRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RequestedItemDtoRef) SetId(v string)`

SetId sets Id field to given value.


### GetComment

`func (o *RequestedItemDtoRef) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *RequestedItemDtoRef) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *RequestedItemDtoRef) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *RequestedItemDtoRef) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetClientMetadata

`func (o *RequestedItemDtoRef) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *RequestedItemDtoRef) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *RequestedItemDtoRef) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *RequestedItemDtoRef) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetRemoveDate

`func (o *RequestedItemDtoRef) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *RequestedItemDtoRef) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *RequestedItemDtoRef) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *RequestedItemDtoRef) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetAccountSelection

`func (o *RequestedItemDtoRef) GetAccountSelection() []SourceItemRef`

GetAccountSelection returns the AccountSelection field if non-nil, zero value otherwise.

### GetAccountSelectionOk

`func (o *RequestedItemDtoRef) GetAccountSelectionOk() (*[]SourceItemRef, bool)`

GetAccountSelectionOk returns a tuple with the AccountSelection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSelection

`func (o *RequestedItemDtoRef) SetAccountSelection(v []SourceItemRef)`

SetAccountSelection sets AccountSelection field to given value.

### HasAccountSelection

`func (o *RequestedItemDtoRef) HasAccountSelection() bool`

HasAccountSelection returns a boolean if a field has been set.

### SetAccountSelectionNil

`func (o *RequestedItemDtoRef) SetAccountSelectionNil(b bool)`

 SetAccountSelectionNil sets the value for AccountSelection to be an explicit nil

### UnsetAccountSelection
`func (o *RequestedItemDtoRef) UnsetAccountSelection()`

UnsetAccountSelection ensures that no value is present for AccountSelection, not even an explicit nil

