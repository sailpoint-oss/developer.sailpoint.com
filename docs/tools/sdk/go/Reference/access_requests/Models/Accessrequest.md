---
id: v1-accessrequest
title: Accessrequest
pagination_label: Accessrequest
sidebar_label: Accessrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequest', 'V1Accessrequest'] 
slug: /tools/sdk/go/accessrequests/models/accessrequest
tags: ['SDK', 'Software Development Kit', 'Accessrequest', 'V1Accessrequest']
---

# Accessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]string** | A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID. | 
**RequestType** | Pointer to [**NullableAccessrequesttype**](accessrequesttype) |  | [optional] 
**RequestedItems** | [**[]Accessrequestitem**](accessrequestitem) |  | 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**RequestedForWithRequestedItems** | Pointer to [**[]Requestedfordtoref**](requestedfordtoref) | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when 'requestedFor' and 'requestedItems' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source * Allows the ability to request items with different start dates * Allows the ability to request items with different remove dates * Also allows different combinations of request items and identities in the same request * Only for use in GRANT_ACCESS type requests  | [optional] 

## Methods

### NewAccessrequest

`func NewAccessrequest(requestedFor []string, requestedItems []Accessrequestitem, ) *Accessrequest`

NewAccessrequest instantiates a new Accessrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestWithDefaults

`func NewAccessrequestWithDefaults() *Accessrequest`

NewAccessrequestWithDefaults instantiates a new Accessrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedFor

`func (o *Accessrequest) GetRequestedFor() []string`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Accessrequest) GetRequestedForOk() (*[]string, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Accessrequest) SetRequestedFor(v []string)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestType

`func (o *Accessrequest) GetRequestType() Accessrequesttype`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Accessrequest) GetRequestTypeOk() (*Accessrequesttype, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Accessrequest) SetRequestType(v Accessrequesttype)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Accessrequest) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *Accessrequest) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *Accessrequest) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequestedItems

`func (o *Accessrequest) GetRequestedItems() []Accessrequestitem`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *Accessrequest) GetRequestedItemsOk() (*[]Accessrequestitem, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *Accessrequest) SetRequestedItems(v []Accessrequestitem)`

SetRequestedItems sets RequestedItems field to given value.


### GetClientMetadata

`func (o *Accessrequest) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Accessrequest) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Accessrequest) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Accessrequest) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetRequestedForWithRequestedItems

`func (o *Accessrequest) GetRequestedForWithRequestedItems() []Requestedfordtoref`

GetRequestedForWithRequestedItems returns the RequestedForWithRequestedItems field if non-nil, zero value otherwise.

### GetRequestedForWithRequestedItemsOk

`func (o *Accessrequest) GetRequestedForWithRequestedItemsOk() (*[]Requestedfordtoref, bool)`

GetRequestedForWithRequestedItemsOk returns a tuple with the RequestedForWithRequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedForWithRequestedItems

`func (o *Accessrequest) SetRequestedForWithRequestedItems(v []Requestedfordtoref)`

SetRequestedForWithRequestedItems sets RequestedForWithRequestedItems field to given value.

### HasRequestedForWithRequestedItems

`func (o *Accessrequest) HasRequestedForWithRequestedItems() bool`

HasRequestedForWithRequestedItems returns a boolean if a field has been set.

### SetRequestedForWithRequestedItemsNil

`func (o *Accessrequest) SetRequestedForWithRequestedItemsNil(b bool)`

 SetRequestedForWithRequestedItemsNil sets the value for RequestedForWithRequestedItems to be an explicit nil

### UnsetRequestedForWithRequestedItems
`func (o *Accessrequest) UnsetRequestedForWithRequestedItems()`

UnsetRequestedForWithRequestedItems ensures that no value is present for RequestedForWithRequestedItems, not even an explicit nil

