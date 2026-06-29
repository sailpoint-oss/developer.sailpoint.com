---
id: v1-accountsselectionrequest
title: Accountsselectionrequest
pagination_label: Accountsselectionrequest
sidebar_label: Accountsselectionrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountsselectionrequest', 'V1Accountsselectionrequest'] 
slug: /tools/sdk/go/accessrequests/models/accountsselectionrequest
tags: ['SDK', 'Software Development Kit', 'Accountsselectionrequest', 'V1Accountsselectionrequest']
---

# Accountsselectionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]string** | A list of Identity IDs for whom the Access is requested. | 
**RequestType** | Pointer to [**NullableAccessrequesttype**](accessrequesttype) |  | [optional] 
**RequestedItems** | [**[]Accessrequestitem**](accessrequestitem) |  | 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities.   | [optional] 

## Methods

### NewAccountsselectionrequest

`func NewAccountsselectionrequest(requestedFor []string, requestedItems []Accessrequestitem, ) *Accountsselectionrequest`

NewAccountsselectionrequest instantiates a new Accountsselectionrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsselectionrequestWithDefaults

`func NewAccountsselectionrequestWithDefaults() *Accountsselectionrequest`

NewAccountsselectionrequestWithDefaults instantiates a new Accountsselectionrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedFor

`func (o *Accountsselectionrequest) GetRequestedFor() []string`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Accountsselectionrequest) GetRequestedForOk() (*[]string, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Accountsselectionrequest) SetRequestedFor(v []string)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestType

`func (o *Accountsselectionrequest) GetRequestType() Accessrequesttype`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Accountsselectionrequest) GetRequestTypeOk() (*Accessrequesttype, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Accountsselectionrequest) SetRequestType(v Accessrequesttype)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Accountsselectionrequest) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *Accountsselectionrequest) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *Accountsselectionrequest) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequestedItems

`func (o *Accountsselectionrequest) GetRequestedItems() []Accessrequestitem`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *Accountsselectionrequest) GetRequestedItemsOk() (*[]Accessrequestitem, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *Accountsselectionrequest) SetRequestedItems(v []Accessrequestitem)`

SetRequestedItems sets RequestedItems field to given value.


### GetClientMetadata

`func (o *Accountsselectionrequest) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Accountsselectionrequest) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Accountsselectionrequest) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Accountsselectionrequest) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.


