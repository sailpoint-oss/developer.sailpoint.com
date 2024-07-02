---
id: access-request-item
title: AccessRequestItem
pagination_label: AccessRequestItem
sidebar_label: AccessRequestItem
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestItem'] 
slug: /tools/sdk/go/v3/models/access-request-item
tags: ['SDK', 'Software Development Kit', 'AccessRequestItem']
---

# AccessRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **string** | The type of the item being requested. | 
**Id** |  **string** | ID of Role, Access Profile or Entitlement being requested. | 
**Comment** |  Pointer to **string** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** |  Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**RemoveDate** |  Pointer to **time.Time** | The date the role or access profile is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date in the future. * The current SLA for the deprovisioning is 24 hours. * This date can be modified to either extend or decrease the duration of access item assignments for the specified identity. You can change the expiration date for requests for yourself or direct reports, but you cannot remove an expiration date on an already approved item. If the access request has not been approved, you can cancel it and submit a new one without the expiration. If it has already been approved, then you have to revoke the access and then re-request without the expiration. * Currently it is not supported for entitlements.  | [optional] 

## Methods

### NewAccessRequestItem

`func NewAccessRequestItem(type_ string, id string, ) *AccessRequestItem`

NewAccessRequestItem instantiates a new AccessRequestItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestItemWithDefaults

`func NewAccessRequestItemWithDefaults() *AccessRequestItem`

NewAccessRequestItemWithDefaults instantiates a new AccessRequestItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessRequestItem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestItem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestItem) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccessRequestItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestItem) SetId(v string)`

SetId sets Id field to given value.


### GetComment

`func (o *AccessRequestItem) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessRequestItem) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessRequestItem) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessRequestItem) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetClientMetadata

`func (o *AccessRequestItem) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccessRequestItem) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccessRequestItem) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccessRequestItem) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetRemoveDate

`func (o *AccessRequestItem) GetRemoveDate() time.Time`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *AccessRequestItem) GetRemoveDateOk() (*time.Time, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *AccessRequestItem) SetRemoveDate(v time.Time)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *AccessRequestItem) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.


[[Back to top]](#) 


