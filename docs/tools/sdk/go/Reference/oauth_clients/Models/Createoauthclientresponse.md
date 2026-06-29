---
id: v1-createoauthclientresponse
title: Createoauthclientresponse
pagination_label: Createoauthclientresponse
sidebar_label: Createoauthclientresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createoauthclientresponse', 'V1Createoauthclientresponse'] 
slug: /tools/sdk/go/oauthclients/models/createoauthclientresponse
tags: ['SDK', 'Software Development Kit', 'Createoauthclientresponse', 'V1Createoauthclientresponse']
---

# Createoauthclientresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the OAuth client | 
**Secret** | **string** | Secret of the OAuth client (This field is only returned on the intial create call.) | 
**BusinessName** | **string** | The name of the business the API Client should belong to | 
**HomepageUrl** | **string** | The homepage URL associated with the owner of the API Client | 
**Name** | **string** | A human-readable name for the API Client | 
**Description** | **string** | A description of the API Client | 
**AccessTokenValiditySeconds** | **int32** | The number of seconds an access token generated for this API Client is valid for | 
**RefreshTokenValiditySeconds** | **int32** | The number of seconds a refresh token generated for this API Client is valid for | 
**RedirectUris** | **[]string** | A list of the approved redirect URIs used with the authorization_code flow | 
**GrantTypes** | [**[]Granttype**](granttype) | A list of OAuth 2.0 grant types this API Client can be used with | 
**AccessType** | [**Accesstype**](accesstype) |  | 
**Type** | [**Clienttype**](clienttype) |  | 
**Internal** | **bool** | An indicator of whether the API Client can be used for requests internal to IDN | 
**Enabled** | **bool** | An indicator of whether the API Client is enabled for use | 
**StrongAuthSupported** | **bool** | An indicator of whether the API Client supports strong authentication | 
**ClaimsSupported** | **bool** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | 
**Created** | **SailPointTime** | The date and time, down to the millisecond, when the API Client was created | 
**Modified** | **SailPointTime** | The date and time, down to the millisecond, when the API Client was last updated | 
**Scope** | **[]string** | Scopes of the API Client. | 

## Methods

### NewCreateoauthclientresponse

`func NewCreateoauthclientresponse(id string, secret string, businessName string, homepageUrl string, name string, description string, accessTokenValiditySeconds int32, refreshTokenValiditySeconds int32, redirectUris []string, grantTypes []Granttype, accessType Accesstype, type_ Clienttype, internal bool, enabled bool, strongAuthSupported bool, claimsSupported bool, created SailPointTime, modified SailPointTime, scope []string, ) *Createoauthclientresponse`

NewCreateoauthclientresponse instantiates a new Createoauthclientresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateoauthclientresponseWithDefaults

`func NewCreateoauthclientresponseWithDefaults() *Createoauthclientresponse`

NewCreateoauthclientresponseWithDefaults instantiates a new Createoauthclientresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Createoauthclientresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Createoauthclientresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Createoauthclientresponse) SetId(v string)`

SetId sets Id field to given value.


### GetSecret

`func (o *Createoauthclientresponse) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Createoauthclientresponse) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Createoauthclientresponse) SetSecret(v string)`

SetSecret sets Secret field to given value.


### GetBusinessName

`func (o *Createoauthclientresponse) GetBusinessName() string`

GetBusinessName returns the BusinessName field if non-nil, zero value otherwise.

### GetBusinessNameOk

`func (o *Createoauthclientresponse) GetBusinessNameOk() (*string, bool)`

GetBusinessNameOk returns a tuple with the BusinessName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessName

`func (o *Createoauthclientresponse) SetBusinessName(v string)`

SetBusinessName sets BusinessName field to given value.


### GetHomepageUrl

`func (o *Createoauthclientresponse) GetHomepageUrl() string`

GetHomepageUrl returns the HomepageUrl field if non-nil, zero value otherwise.

### GetHomepageUrlOk

`func (o *Createoauthclientresponse) GetHomepageUrlOk() (*string, bool)`

GetHomepageUrlOk returns a tuple with the HomepageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHomepageUrl

`func (o *Createoauthclientresponse) SetHomepageUrl(v string)`

SetHomepageUrl sets HomepageUrl field to given value.


### GetName

`func (o *Createoauthclientresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Createoauthclientresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Createoauthclientresponse) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Createoauthclientresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Createoauthclientresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Createoauthclientresponse) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetAccessTokenValiditySeconds

`func (o *Createoauthclientresponse) GetAccessTokenValiditySeconds() int32`

GetAccessTokenValiditySeconds returns the AccessTokenValiditySeconds field if non-nil, zero value otherwise.

### GetAccessTokenValiditySecondsOk

`func (o *Createoauthclientresponse) GetAccessTokenValiditySecondsOk() (*int32, bool)`

GetAccessTokenValiditySecondsOk returns a tuple with the AccessTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessTokenValiditySeconds

`func (o *Createoauthclientresponse) SetAccessTokenValiditySeconds(v int32)`

SetAccessTokenValiditySeconds sets AccessTokenValiditySeconds field to given value.


### GetRefreshTokenValiditySeconds

`func (o *Createoauthclientresponse) GetRefreshTokenValiditySeconds() int32`

GetRefreshTokenValiditySeconds returns the RefreshTokenValiditySeconds field if non-nil, zero value otherwise.

### GetRefreshTokenValiditySecondsOk

`func (o *Createoauthclientresponse) GetRefreshTokenValiditySecondsOk() (*int32, bool)`

GetRefreshTokenValiditySecondsOk returns a tuple with the RefreshTokenValiditySeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshTokenValiditySeconds

`func (o *Createoauthclientresponse) SetRefreshTokenValiditySeconds(v int32)`

SetRefreshTokenValiditySeconds sets RefreshTokenValiditySeconds field to given value.


### GetRedirectUris

`func (o *Createoauthclientresponse) GetRedirectUris() []string`

GetRedirectUris returns the RedirectUris field if non-nil, zero value otherwise.

### GetRedirectUrisOk

`func (o *Createoauthclientresponse) GetRedirectUrisOk() (*[]string, bool)`

GetRedirectUrisOk returns a tuple with the RedirectUris field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUris

`func (o *Createoauthclientresponse) SetRedirectUris(v []string)`

SetRedirectUris sets RedirectUris field to given value.


### GetGrantTypes

`func (o *Createoauthclientresponse) GetGrantTypes() []Granttype`

GetGrantTypes returns the GrantTypes field if non-nil, zero value otherwise.

### GetGrantTypesOk

`func (o *Createoauthclientresponse) GetGrantTypesOk() (*[]Granttype, bool)`

GetGrantTypesOk returns a tuple with the GrantTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantTypes

`func (o *Createoauthclientresponse) SetGrantTypes(v []Granttype)`

SetGrantTypes sets GrantTypes field to given value.


### GetAccessType

`func (o *Createoauthclientresponse) GetAccessType() Accesstype`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *Createoauthclientresponse) GetAccessTypeOk() (*Accesstype, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *Createoauthclientresponse) SetAccessType(v Accesstype)`

SetAccessType sets AccessType field to given value.


### GetType

`func (o *Createoauthclientresponse) GetType() Clienttype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Createoauthclientresponse) GetTypeOk() (*Clienttype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Createoauthclientresponse) SetType(v Clienttype)`

SetType sets Type field to given value.


### GetInternal

`func (o *Createoauthclientresponse) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *Createoauthclientresponse) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *Createoauthclientresponse) SetInternal(v bool)`

SetInternal sets Internal field to given value.


### GetEnabled

`func (o *Createoauthclientresponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Createoauthclientresponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Createoauthclientresponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetStrongAuthSupported

`func (o *Createoauthclientresponse) GetStrongAuthSupported() bool`

GetStrongAuthSupported returns the StrongAuthSupported field if non-nil, zero value otherwise.

### GetStrongAuthSupportedOk

`func (o *Createoauthclientresponse) GetStrongAuthSupportedOk() (*bool, bool)`

GetStrongAuthSupportedOk returns a tuple with the StrongAuthSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrongAuthSupported

`func (o *Createoauthclientresponse) SetStrongAuthSupported(v bool)`

SetStrongAuthSupported sets StrongAuthSupported field to given value.


### GetClaimsSupported

`func (o *Createoauthclientresponse) GetClaimsSupported() bool`

GetClaimsSupported returns the ClaimsSupported field if non-nil, zero value otherwise.

### GetClaimsSupportedOk

`func (o *Createoauthclientresponse) GetClaimsSupportedOk() (*bool, bool)`

GetClaimsSupportedOk returns a tuple with the ClaimsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimsSupported

`func (o *Createoauthclientresponse) SetClaimsSupported(v bool)`

SetClaimsSupported sets ClaimsSupported field to given value.


### GetCreated

`func (o *Createoauthclientresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Createoauthclientresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Createoauthclientresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Createoauthclientresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Createoauthclientresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Createoauthclientresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetScope

`func (o *Createoauthclientresponse) GetScope() []string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Createoauthclientresponse) GetScopeOk() (*[]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Createoauthclientresponse) SetScope(v []string)`

SetScope sets Scope field to given value.


### SetScopeNil

`func (o *Createoauthclientresponse) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *Createoauthclientresponse) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil

