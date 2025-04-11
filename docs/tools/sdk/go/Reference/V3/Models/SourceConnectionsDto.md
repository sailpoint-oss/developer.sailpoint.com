---
id: source-connections-dto
title: SourceConnectionsDto
pagination_label: SourceConnectionsDto
sidebar_label: SourceConnectionsDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceConnectionsDto', 'SourceConnectionsDto'] 
slug: /tools/sdk/go/v3/models/source-connections-dto
tags: ['SDK', 'Software Development Kit', 'SourceConnectionsDto', 'SourceConnectionsDto']
---

# SourceConnectionsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityProfiles** | Pointer to [**[]IdentityProfilesConnections**](identity-profiles-connections) | The IdentityProfile attached to this source | [optional] 
**CredentialProfiles** | Pointer to **[]string** | Name of the CredentialProfile attached to this source | [optional] 
**SourceAttributes** | Pointer to **[]string** | The attributes attached to this source | [optional] 
**MappingProfiles** | Pointer to **[]string** | The profiles attached to this source | [optional] 
**DependentCustomTransforms** | Pointer to [**[]TransformRead**](transform-read) | A list of custom transforms associated with this source. A transform will be considered associated with a source if any attributes of the transform specify the source as the sourceName. | [optional] 
**DependentApps** | Pointer to [**[]DependantAppConnections**](dependant-app-connections) |  | [optional] 
**MissingDependents** | Pointer to [**[]DependantConnectionsMissingDto**](dependant-connections-missing-dto) |  | [optional] 

## Methods

### NewSourceConnectionsDto

`func NewSourceConnectionsDto() *SourceConnectionsDto`

NewSourceConnectionsDto instantiates a new SourceConnectionsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceConnectionsDtoWithDefaults

`func NewSourceConnectionsDtoWithDefaults() *SourceConnectionsDto`

NewSourceConnectionsDtoWithDefaults instantiates a new SourceConnectionsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityProfiles

`func (o *SourceConnectionsDto) GetIdentityProfiles() []IdentityProfilesConnections`

GetIdentityProfiles returns the IdentityProfiles field if non-nil, zero value otherwise.

### GetIdentityProfilesOk

`func (o *SourceConnectionsDto) GetIdentityProfilesOk() (*[]IdentityProfilesConnections, bool)`

GetIdentityProfilesOk returns a tuple with the IdentityProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityProfiles

`func (o *SourceConnectionsDto) SetIdentityProfiles(v []IdentityProfilesConnections)`

SetIdentityProfiles sets IdentityProfiles field to given value.

### HasIdentityProfiles

`func (o *SourceConnectionsDto) HasIdentityProfiles() bool`

HasIdentityProfiles returns a boolean if a field has been set.

### GetCredentialProfiles

`func (o *SourceConnectionsDto) GetCredentialProfiles() []string`

GetCredentialProfiles returns the CredentialProfiles field if non-nil, zero value otherwise.

### GetCredentialProfilesOk

`func (o *SourceConnectionsDto) GetCredentialProfilesOk() (*[]string, bool)`

GetCredentialProfilesOk returns a tuple with the CredentialProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialProfiles

`func (o *SourceConnectionsDto) SetCredentialProfiles(v []string)`

SetCredentialProfiles sets CredentialProfiles field to given value.

### HasCredentialProfiles

`func (o *SourceConnectionsDto) HasCredentialProfiles() bool`

HasCredentialProfiles returns a boolean if a field has been set.

### GetSourceAttributes

`func (o *SourceConnectionsDto) GetSourceAttributes() []string`

GetSourceAttributes returns the SourceAttributes field if non-nil, zero value otherwise.

### GetSourceAttributesOk

`func (o *SourceConnectionsDto) GetSourceAttributesOk() (*[]string, bool)`

GetSourceAttributesOk returns a tuple with the SourceAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAttributes

`func (o *SourceConnectionsDto) SetSourceAttributes(v []string)`

SetSourceAttributes sets SourceAttributes field to given value.

### HasSourceAttributes

`func (o *SourceConnectionsDto) HasSourceAttributes() bool`

HasSourceAttributes returns a boolean if a field has been set.

### GetMappingProfiles

`func (o *SourceConnectionsDto) GetMappingProfiles() []string`

GetMappingProfiles returns the MappingProfiles field if non-nil, zero value otherwise.

### GetMappingProfilesOk

`func (o *SourceConnectionsDto) GetMappingProfilesOk() (*[]string, bool)`

GetMappingProfilesOk returns a tuple with the MappingProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingProfiles

`func (o *SourceConnectionsDto) SetMappingProfiles(v []string)`

SetMappingProfiles sets MappingProfiles field to given value.

### HasMappingProfiles

`func (o *SourceConnectionsDto) HasMappingProfiles() bool`

HasMappingProfiles returns a boolean if a field has been set.

### GetDependentCustomTransforms

`func (o *SourceConnectionsDto) GetDependentCustomTransforms() []TransformRead`

GetDependentCustomTransforms returns the DependentCustomTransforms field if non-nil, zero value otherwise.

### GetDependentCustomTransformsOk

`func (o *SourceConnectionsDto) GetDependentCustomTransformsOk() (*[]TransformRead, bool)`

GetDependentCustomTransformsOk returns a tuple with the DependentCustomTransforms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependentCustomTransforms

`func (o *SourceConnectionsDto) SetDependentCustomTransforms(v []TransformRead)`

SetDependentCustomTransforms sets DependentCustomTransforms field to given value.

### HasDependentCustomTransforms

`func (o *SourceConnectionsDto) HasDependentCustomTransforms() bool`

HasDependentCustomTransforms returns a boolean if a field has been set.

### GetDependentApps

`func (o *SourceConnectionsDto) GetDependentApps() []DependantAppConnections`

GetDependentApps returns the DependentApps field if non-nil, zero value otherwise.

### GetDependentAppsOk

`func (o *SourceConnectionsDto) GetDependentAppsOk() (*[]DependantAppConnections, bool)`

GetDependentAppsOk returns a tuple with the DependentApps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependentApps

`func (o *SourceConnectionsDto) SetDependentApps(v []DependantAppConnections)`

SetDependentApps sets DependentApps field to given value.

### HasDependentApps

`func (o *SourceConnectionsDto) HasDependentApps() bool`

HasDependentApps returns a boolean if a field has been set.

### GetMissingDependents

`func (o *SourceConnectionsDto) GetMissingDependents() []DependantConnectionsMissingDto`

GetMissingDependents returns the MissingDependents field if non-nil, zero value otherwise.

### GetMissingDependentsOk

`func (o *SourceConnectionsDto) GetMissingDependentsOk() (*[]DependantConnectionsMissingDto, bool)`

GetMissingDependentsOk returns a tuple with the MissingDependents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMissingDependents

`func (o *SourceConnectionsDto) SetMissingDependents(v []DependantConnectionsMissingDto)`

SetMissingDependents sets MissingDependents field to given value.

### HasMissingDependents

`func (o *SourceConnectionsDto) HasMissingDependents() bool`

HasMissingDependents returns a boolean if a field has been set.


