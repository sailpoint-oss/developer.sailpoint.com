---
id: v1-sendaccountverificationrequest
title: Sendaccountverificationrequest
pagination_label: Sendaccountverificationrequest
sidebar_label: Sendaccountverificationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sendaccountverificationrequest', 'V1Sendaccountverificationrequest'] 
slug: /tools/sdk/go/identities/models/sendaccountverificationrequest
tags: ['SDK', 'Software Development Kit', 'Sendaccountverificationrequest', 'V1Sendaccountverificationrequest']
---

# Sendaccountverificationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceName** | Pointer to **NullableString** | The source name where identity account password should be reset | [optional] 
**Via** | **string** | The method to send notification | 

## Methods

### NewSendaccountverificationrequest

`func NewSendaccountverificationrequest(via string, ) *Sendaccountverificationrequest`

NewSendaccountverificationrequest instantiates a new Sendaccountverificationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendaccountverificationrequestWithDefaults

`func NewSendaccountverificationrequestWithDefaults() *Sendaccountverificationrequest`

NewSendaccountverificationrequestWithDefaults instantiates a new Sendaccountverificationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceName

`func (o *Sendaccountverificationrequest) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Sendaccountverificationrequest) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Sendaccountverificationrequest) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Sendaccountverificationrequest) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *Sendaccountverificationrequest) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *Sendaccountverificationrequest) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetVia

`func (o *Sendaccountverificationrequest) GetVia() string`

GetVia returns the Via field if non-nil, zero value otherwise.

### GetViaOk

`func (o *Sendaccountverificationrequest) GetViaOk() (*string, bool)`

GetViaOk returns a tuple with the Via field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVia

`func (o *Sendaccountverificationrequest) SetVia(v string)`

SetVia sets Via field to given value.



