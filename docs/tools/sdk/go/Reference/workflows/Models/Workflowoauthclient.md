---
id: v1-workflowoauthclient
title: Workflowoauthclient
pagination_label: Workflowoauthclient
sidebar_label: Workflowoauthclient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowoauthclient', 'V1Workflowoauthclient'] 
slug: /tools/sdk/go/workflows/models/workflowoauthclient
tags: ['SDK', 'Software Development Kit', 'Workflowoauthclient', 'V1Workflowoauthclient']
---

# Workflowoauthclient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | OAuth client ID for the trigger. This is a UUID generated upon creation. | [optional] 
**Secret** | Pointer to **string** | OAuthClient secret. | [optional] 
**Url** | Pointer to **string** | URL for the external trigger to invoke | [optional] 

## Methods

### NewWorkflowoauthclient

`func NewWorkflowoauthclient() *Workflowoauthclient`

NewWorkflowoauthclient instantiates a new Workflowoauthclient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowoauthclientWithDefaults

`func NewWorkflowoauthclientWithDefaults() *Workflowoauthclient`

NewWorkflowoauthclientWithDefaults instantiates a new Workflowoauthclient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Workflowoauthclient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workflowoauthclient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workflowoauthclient) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Workflowoauthclient) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSecret

`func (o *Workflowoauthclient) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Workflowoauthclient) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Workflowoauthclient) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *Workflowoauthclient) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### GetUrl

`func (o *Workflowoauthclient) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *Workflowoauthclient) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *Workflowoauthclient) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *Workflowoauthclient) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


