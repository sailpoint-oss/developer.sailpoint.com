---
id: v2024-certifier-response
title: CertifierResponse
pagination_label: CertifierResponse
sidebar_label: CertifierResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertifierResponse', 'V2024CertifierResponse'] 
slug: /tools/sdk/go/v2024/models/certifier-response
tags: ['SDK', 'Software Development Kit', 'CertifierResponse', 'V2024CertifierResponse']
---

# CertifierResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the id of the certifier | [optional] 
**DisplayName** | Pointer to **string** | the name of the certifier | [optional] 

## Methods

### NewCertifierResponse

`func NewCertifierResponse() *CertifierResponse`

NewCertifierResponse instantiates a new CertifierResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertifierResponseWithDefaults

`func NewCertifierResponseWithDefaults() *CertifierResponse`

NewCertifierResponseWithDefaults instantiates a new CertifierResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertifierResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertifierResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertifierResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CertifierResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *CertifierResponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *CertifierResponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *CertifierResponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *CertifierResponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.


