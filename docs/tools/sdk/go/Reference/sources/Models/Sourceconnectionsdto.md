---
id: v1-sourceconnectionsdto
title: Sourceconnectionsdto
pagination_label: Sourceconnectionsdto
sidebar_label: Sourceconnectionsdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceconnectionsdto', 'V1Sourceconnectionsdto'] 
slug: /tools/sdk/go/sources/models/sourceconnectionsdto
tags: ['SDK', 'Software Development Kit', 'Sourceconnectionsdto', 'V1Sourceconnectionsdto']
---

# Sourceconnectionsdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityProfiles** | Pointer to [**[]Identityprofilesconnections**](identityprofilesconnections) | The IdentityProfile attached to this source | [optional] 
**CredentialProfiles** | Pointer to **[]string** | Name of the CredentialProfile attached to this source | [optional] 
**SourceAttributes** | Pointer to **[]string** | The attributes attached to this source | [optional] 
**MappingProfiles** | Pointer to **[]string** | The profiles attached to this source | [optional] 
**DependentCustomTransforms** | Pointer to [**[]Transformread**](transformread) | A list of custom transforms associated with this source. A transform will be considered associated with a source if any attributes of the transform specify the source as the sourceName. | [optional] 
**DependentApps** | Pointer to [**[]Dependantappconnections**](dependantappconnections) |  | [optional] 
**MissingDependents** | Pointer to [**[]Dependantconnectionsmissingdto**](dependantconnectionsmissingdto) |  | [optional] 

## Methods

### NewSourceconnectionsdto

`func NewSourceconnectionsdto() *Sourceconnectionsdto`

NewSourceconnectionsdto instantiates a new Sourceconnectionsdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceconnectionsdtoWithDefaults

`func NewSourceconnectionsdtoWithDefaults() *Sourceconnectionsdto`

NewSourceconnectionsdtoWithDefaults instantiates a new Sourceconnectionsdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityProfiles

`func (o *Sourceconnectionsdto) GetIdentityProfiles() []Identityprofilesconnections`

GetIdentityProfiles returns the IdentityProfiles field if non-nil, zero value otherwise.

### GetIdentityProfilesOk

`func (o *Sourceconnectionsdto) GetIdentityProfilesOk() (*[]Identityprofilesconnections, bool)`

GetIdentityProfilesOk returns a tuple with the IdentityProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityProfiles

`func (o *Sourceconnectionsdto) SetIdentityProfiles(v []Identityprofilesconnections)`

SetIdentityProfiles sets IdentityProfiles field to given value.

### HasIdentityProfiles

`func (o *Sourceconnectionsdto) HasIdentityProfiles() bool`

HasIdentityProfiles returns a boolean if a field has been set.

### GetCredentialProfiles

`func (o *Sourceconnectionsdto) GetCredentialProfiles() []string`

GetCredentialProfiles returns the CredentialProfiles field if non-nil, zero value otherwise.

### GetCredentialProfilesOk

`func (o *Sourceconnectionsdto) GetCredentialProfilesOk() (*[]string, bool)`

GetCredentialProfilesOk returns a tuple with the CredentialProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialProfiles

`func (o *Sourceconnectionsdto) SetCredentialProfiles(v []string)`

SetCredentialProfiles sets CredentialProfiles field to given value.

### HasCredentialProfiles

`func (o *Sourceconnectionsdto) HasCredentialProfiles() bool`

HasCredentialProfiles returns a boolean if a field has been set.

### GetSourceAttributes

`func (o *Sourceconnectionsdto) GetSourceAttributes() []string`

GetSourceAttributes returns the SourceAttributes field if non-nil, zero value otherwise.

### GetSourceAttributesOk

`func (o *Sourceconnectionsdto) GetSourceAttributesOk() (*[]string, bool)`

GetSourceAttributesOk returns a tuple with the SourceAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAttributes

`func (o *Sourceconnectionsdto) SetSourceAttributes(v []string)`

SetSourceAttributes sets SourceAttributes field to given value.

### HasSourceAttributes

`func (o *Sourceconnectionsdto) HasSourceAttributes() bool`

HasSourceAttributes returns a boolean if a field has been set.

### GetMappingProfiles

`func (o *Sourceconnectionsdto) GetMappingProfiles() []string`

GetMappingProfiles returns the MappingProfiles field if non-nil, zero value otherwise.

### GetMappingProfilesOk

`func (o *Sourceconnectionsdto) GetMappingProfilesOk() (*[]string, bool)`

GetMappingProfilesOk returns a tuple with the MappingProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingProfiles

`func (o *Sourceconnectionsdto) SetMappingProfiles(v []string)`

SetMappingProfiles sets MappingProfiles field to given value.

### HasMappingProfiles

`func (o *Sourceconnectionsdto) HasMappingProfiles() bool`

HasMappingProfiles returns a boolean if a field has been set.

### GetDependentCustomTransforms

`func (o *Sourceconnectionsdto) GetDependentCustomTransforms() []Transformread`

GetDependentCustomTransforms returns the DependentCustomTransforms field if non-nil, zero value otherwise.

### GetDependentCustomTransformsOk

`func (o *Sourceconnectionsdto) GetDependentCustomTransformsOk() (*[]Transformread, bool)`

GetDependentCustomTransformsOk returns a tuple with the DependentCustomTransforms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependentCustomTransforms

`func (o *Sourceconnectionsdto) SetDependentCustomTransforms(v []Transformread)`

SetDependentCustomTransforms sets DependentCustomTransforms field to given value.

### HasDependentCustomTransforms

`func (o *Sourceconnectionsdto) HasDependentCustomTransforms() bool`

HasDependentCustomTransforms returns a boolean if a field has been set.

### GetDependentApps

`func (o *Sourceconnectionsdto) GetDependentApps() []Dependantappconnections`

GetDependentApps returns the DependentApps field if non-nil, zero value otherwise.

### GetDependentAppsOk

`func (o *Sourceconnectionsdto) GetDependentAppsOk() (*[]Dependantappconnections, bool)`

GetDependentAppsOk returns a tuple with the DependentApps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependentApps

`func (o *Sourceconnectionsdto) SetDependentApps(v []Dependantappconnections)`

SetDependentApps sets DependentApps field to given value.

### HasDependentApps

`func (o *Sourceconnectionsdto) HasDependentApps() bool`

HasDependentApps returns a boolean if a field has been set.

### GetMissingDependents

`func (o *Sourceconnectionsdto) GetMissingDependents() []Dependantconnectionsmissingdto`

GetMissingDependents returns the MissingDependents field if non-nil, zero value otherwise.

### GetMissingDependentsOk

`func (o *Sourceconnectionsdto) GetMissingDependentsOk() (*[]Dependantconnectionsmissingdto, bool)`

GetMissingDependentsOk returns a tuple with the MissingDependents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMissingDependents

`func (o *Sourceconnectionsdto) SetMissingDependents(v []Dependantconnectionsmissingdto)`

SetMissingDependents sets MissingDependents field to given value.

### HasMissingDependents

`func (o *Sourceconnectionsdto) HasMissingDependents() bool`

HasMissingDependents returns a boolean if a field has been set.


