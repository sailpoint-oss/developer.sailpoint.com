---
id: v1-multihostintegrations-accounts-file
title: MultihostintegrationsAccountsFile
pagination_label: MultihostintegrationsAccountsFile
sidebar_label: MultihostintegrationsAccountsFile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultihostintegrationsAccountsFile', 'V1MultihostintegrationsAccountsFile'] 
slug: /tools/sdk/go/multihostintegration/models/multihostintegrations-accounts-file
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsAccountsFile', 'V1MultihostintegrationsAccountsFile']
---

# MultihostintegrationsAccountsFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the accounts file. | [optional] 
**Key** | Pointer to **string** | The accounts file key. | [optional] 
**UploadTime** | Pointer to **SailPointTime** | Date-time when the file was uploaded | [optional] 
**Expiry** | Pointer to **SailPointTime** | Date-time when the accounts file expired. | [optional] 
**Expired** | Pointer to **bool** | If this is true, it indicates that the accounts file has expired. | [optional] [default to false]

## Methods

### NewMultihostintegrationsAccountsFile

`func NewMultihostintegrationsAccountsFile() *MultihostintegrationsAccountsFile`

NewMultihostintegrationsAccountsFile instantiates a new MultihostintegrationsAccountsFile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultihostintegrationsAccountsFileWithDefaults

`func NewMultihostintegrationsAccountsFileWithDefaults() *MultihostintegrationsAccountsFile`

NewMultihostintegrationsAccountsFileWithDefaults instantiates a new MultihostintegrationsAccountsFile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MultihostintegrationsAccountsFile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultihostintegrationsAccountsFile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultihostintegrationsAccountsFile) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MultihostintegrationsAccountsFile) HasName() bool`

HasName returns a boolean if a field has been set.

### GetKey

`func (o *MultihostintegrationsAccountsFile) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *MultihostintegrationsAccountsFile) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *MultihostintegrationsAccountsFile) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *MultihostintegrationsAccountsFile) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetUploadTime

`func (o *MultihostintegrationsAccountsFile) GetUploadTime() SailPointTime`

GetUploadTime returns the UploadTime field if non-nil, zero value otherwise.

### GetUploadTimeOk

`func (o *MultihostintegrationsAccountsFile) GetUploadTimeOk() (*SailPointTime, bool)`

GetUploadTimeOk returns a tuple with the UploadTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadTime

`func (o *MultihostintegrationsAccountsFile) SetUploadTime(v SailPointTime)`

SetUploadTime sets UploadTime field to given value.

### HasUploadTime

`func (o *MultihostintegrationsAccountsFile) HasUploadTime() bool`

HasUploadTime returns a boolean if a field has been set.

### GetExpiry

`func (o *MultihostintegrationsAccountsFile) GetExpiry() SailPointTime`

GetExpiry returns the Expiry field if non-nil, zero value otherwise.

### GetExpiryOk

`func (o *MultihostintegrationsAccountsFile) GetExpiryOk() (*SailPointTime, bool)`

GetExpiryOk returns a tuple with the Expiry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiry

`func (o *MultihostintegrationsAccountsFile) SetExpiry(v SailPointTime)`

SetExpiry sets Expiry field to given value.

### HasExpiry

`func (o *MultihostintegrationsAccountsFile) HasExpiry() bool`

HasExpiry returns a boolean if a field has been set.

### GetExpired

`func (o *MultihostintegrationsAccountsFile) GetExpired() bool`

GetExpired returns the Expired field if non-nil, zero value otherwise.

### GetExpiredOk

`func (o *MultihostintegrationsAccountsFile) GetExpiredOk() (*bool, bool)`

GetExpiredOk returns a tuple with the Expired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpired

`func (o *MultihostintegrationsAccountsFile) SetExpired(v bool)`

SetExpired sets Expired field to given value.

### HasExpired

`func (o *MultihostintegrationsAccountsFile) HasExpired() bool`

HasExpired returns a boolean if a field has been set.


