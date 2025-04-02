---
id: v2024-http-config
title: HttpConfig
pagination_label: HttpConfig
sidebar_label: HttpConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'HttpConfig', 'V2024HttpConfig'] 
slug: /tools/sdk/go/v2024/models/http-config
tags: ['SDK', 'Software Development Kit', 'HttpConfig', 'V2024HttpConfig']
---

# HttpConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **string** | URL of the external/custom integration. | 
**HttpDispatchMode** | [**HttpDispatchMode**](http-dispatch-mode) |  | 
**HttpAuthenticationType** | Pointer to [**HttpAuthenticationType**](http-authentication-type) |  | [optional] [default to HTTPAUTHENTICATIONTYPE_NO_AUTH]
**BasicAuthConfig** | Pointer to [**NullableBasicAuthConfig**](basic-auth-config) |  | [optional] 
**BearerTokenAuthConfig** | Pointer to [**NullableBearerTokenAuthConfig**](bearer-token-auth-config) |  | [optional] 

## Methods

### NewHttpConfig

`func NewHttpConfig(url string, httpDispatchMode HttpDispatchMode, ) *HttpConfig`

NewHttpConfig instantiates a new HttpConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHttpConfigWithDefaults

`func NewHttpConfigWithDefaults() *HttpConfig`

NewHttpConfigWithDefaults instantiates a new HttpConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *HttpConfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *HttpConfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *HttpConfig) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetHttpDispatchMode

`func (o *HttpConfig) GetHttpDispatchMode() HttpDispatchMode`

GetHttpDispatchMode returns the HttpDispatchMode field if non-nil, zero value otherwise.

### GetHttpDispatchModeOk

`func (o *HttpConfig) GetHttpDispatchModeOk() (*HttpDispatchMode, bool)`

GetHttpDispatchModeOk returns a tuple with the HttpDispatchMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpDispatchMode

`func (o *HttpConfig) SetHttpDispatchMode(v HttpDispatchMode)`

SetHttpDispatchMode sets HttpDispatchMode field to given value.


### GetHttpAuthenticationType

`func (o *HttpConfig) GetHttpAuthenticationType() HttpAuthenticationType`

GetHttpAuthenticationType returns the HttpAuthenticationType field if non-nil, zero value otherwise.

### GetHttpAuthenticationTypeOk

`func (o *HttpConfig) GetHttpAuthenticationTypeOk() (*HttpAuthenticationType, bool)`

GetHttpAuthenticationTypeOk returns a tuple with the HttpAuthenticationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpAuthenticationType

`func (o *HttpConfig) SetHttpAuthenticationType(v HttpAuthenticationType)`

SetHttpAuthenticationType sets HttpAuthenticationType field to given value.

### HasHttpAuthenticationType

`func (o *HttpConfig) HasHttpAuthenticationType() bool`

HasHttpAuthenticationType returns a boolean if a field has been set.

### GetBasicAuthConfig

`func (o *HttpConfig) GetBasicAuthConfig() BasicAuthConfig`

GetBasicAuthConfig returns the BasicAuthConfig field if non-nil, zero value otherwise.

### GetBasicAuthConfigOk

`func (o *HttpConfig) GetBasicAuthConfigOk() (*BasicAuthConfig, bool)`

GetBasicAuthConfigOk returns a tuple with the BasicAuthConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasicAuthConfig

`func (o *HttpConfig) SetBasicAuthConfig(v BasicAuthConfig)`

SetBasicAuthConfig sets BasicAuthConfig field to given value.

### HasBasicAuthConfig

`func (o *HttpConfig) HasBasicAuthConfig() bool`

HasBasicAuthConfig returns a boolean if a field has been set.

### SetBasicAuthConfigNil

`func (o *HttpConfig) SetBasicAuthConfigNil(b bool)`

 SetBasicAuthConfigNil sets the value for BasicAuthConfig to be an explicit nil

### UnsetBasicAuthConfig
`func (o *HttpConfig) UnsetBasicAuthConfig()`

UnsetBasicAuthConfig ensures that no value is present for BasicAuthConfig, not even an explicit nil
### GetBearerTokenAuthConfig

`func (o *HttpConfig) GetBearerTokenAuthConfig() BearerTokenAuthConfig`

GetBearerTokenAuthConfig returns the BearerTokenAuthConfig field if non-nil, zero value otherwise.

### GetBearerTokenAuthConfigOk

`func (o *HttpConfig) GetBearerTokenAuthConfigOk() (*BearerTokenAuthConfig, bool)`

GetBearerTokenAuthConfigOk returns a tuple with the BearerTokenAuthConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerTokenAuthConfig

`func (o *HttpConfig) SetBearerTokenAuthConfig(v BearerTokenAuthConfig)`

SetBearerTokenAuthConfig sets BearerTokenAuthConfig field to given value.

### HasBearerTokenAuthConfig

`func (o *HttpConfig) HasBearerTokenAuthConfig() bool`

HasBearerTokenAuthConfig returns a boolean if a field has been set.

### SetBearerTokenAuthConfigNil

`func (o *HttpConfig) SetBearerTokenAuthConfigNil(b bool)`

 SetBearerTokenAuthConfigNil sets the value for BearerTokenAuthConfig to be an explicit nil

### UnsetBearerTokenAuthConfig
`func (o *HttpConfig) UnsetBearerTokenAuthConfig()`

UnsetBearerTokenAuthConfig ensures that no value is present for BearerTokenAuthConfig, not even an explicit nil

