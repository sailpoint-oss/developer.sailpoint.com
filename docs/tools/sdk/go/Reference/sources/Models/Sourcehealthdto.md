---
id: v1-sourcehealthdto
title: Sourcehealthdto
pagination_label: Sourcehealthdto
sidebar_label: Sourcehealthdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcehealthdto', 'V1Sourcehealthdto'] 
slug: /tools/sdk/go/sources/models/sourcehealthdto
tags: ['SDK', 'Software Development Kit', 'Sourcehealthdto', 'V1Sourcehealthdto']
---

# Sourcehealthdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the id of the Source | [optional] [readonly] 
**Type** | Pointer to **string** | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a Delimited File source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**Name** | Pointer to **string** | the name of the source | [optional] 
**Org** | Pointer to **string** | source's org | [optional] 
**IsAuthoritative** | Pointer to **bool** | Is the source authoritative | [optional] 
**IsCluster** | Pointer to **bool** | Is the source in a cluster | [optional] 
**Hostname** | Pointer to **string** | source's hostname | [optional] 
**Pod** | Pointer to **string** | source's pod | [optional] 
**IqServiceVersion** | Pointer to **NullableString** | The version of the iqService | [optional] 
**Status** | Pointer to **string** | connection test result | [optional] 

## Methods

### NewSourcehealthdto

`func NewSourcehealthdto() *Sourcehealthdto`

NewSourcehealthdto instantiates a new Sourcehealthdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcehealthdtoWithDefaults

`func NewSourcehealthdtoWithDefaults() *Sourcehealthdto`

NewSourcehealthdtoWithDefaults instantiates a new Sourcehealthdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourcehealthdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourcehealthdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourcehealthdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sourcehealthdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Sourcehealthdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sourcehealthdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sourcehealthdto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Sourcehealthdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Sourcehealthdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sourcehealthdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sourcehealthdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sourcehealthdto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrg

`func (o *Sourcehealthdto) GetOrg() string`

GetOrg returns the Org field if non-nil, zero value otherwise.

### GetOrgOk

`func (o *Sourcehealthdto) GetOrgOk() (*string, bool)`

GetOrgOk returns a tuple with the Org field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrg

`func (o *Sourcehealthdto) SetOrg(v string)`

SetOrg sets Org field to given value.

### HasOrg

`func (o *Sourcehealthdto) HasOrg() bool`

HasOrg returns a boolean if a field has been set.

### GetIsAuthoritative

`func (o *Sourcehealthdto) GetIsAuthoritative() bool`

GetIsAuthoritative returns the IsAuthoritative field if non-nil, zero value otherwise.

### GetIsAuthoritativeOk

`func (o *Sourcehealthdto) GetIsAuthoritativeOk() (*bool, bool)`

GetIsAuthoritativeOk returns a tuple with the IsAuthoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAuthoritative

`func (o *Sourcehealthdto) SetIsAuthoritative(v bool)`

SetIsAuthoritative sets IsAuthoritative field to given value.

### HasIsAuthoritative

`func (o *Sourcehealthdto) HasIsAuthoritative() bool`

HasIsAuthoritative returns a boolean if a field has been set.

### GetIsCluster

`func (o *Sourcehealthdto) GetIsCluster() bool`

GetIsCluster returns the IsCluster field if non-nil, zero value otherwise.

### GetIsClusterOk

`func (o *Sourcehealthdto) GetIsClusterOk() (*bool, bool)`

GetIsClusterOk returns a tuple with the IsCluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCluster

`func (o *Sourcehealthdto) SetIsCluster(v bool)`

SetIsCluster sets IsCluster field to given value.

### HasIsCluster

`func (o *Sourcehealthdto) HasIsCluster() bool`

HasIsCluster returns a boolean if a field has been set.

### GetHostname

`func (o *Sourcehealthdto) GetHostname() string`

GetHostname returns the Hostname field if non-nil, zero value otherwise.

### GetHostnameOk

`func (o *Sourcehealthdto) GetHostnameOk() (*string, bool)`

GetHostnameOk returns a tuple with the Hostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostname

`func (o *Sourcehealthdto) SetHostname(v string)`

SetHostname sets Hostname field to given value.

### HasHostname

`func (o *Sourcehealthdto) HasHostname() bool`

HasHostname returns a boolean if a field has been set.

### GetPod

`func (o *Sourcehealthdto) GetPod() string`

GetPod returns the Pod field if non-nil, zero value otherwise.

### GetPodOk

`func (o *Sourcehealthdto) GetPodOk() (*string, bool)`

GetPodOk returns a tuple with the Pod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPod

`func (o *Sourcehealthdto) SetPod(v string)`

SetPod sets Pod field to given value.

### HasPod

`func (o *Sourcehealthdto) HasPod() bool`

HasPod returns a boolean if a field has been set.

### GetIqServiceVersion

`func (o *Sourcehealthdto) GetIqServiceVersion() string`

GetIqServiceVersion returns the IqServiceVersion field if non-nil, zero value otherwise.

### GetIqServiceVersionOk

`func (o *Sourcehealthdto) GetIqServiceVersionOk() (*string, bool)`

GetIqServiceVersionOk returns a tuple with the IqServiceVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIqServiceVersion

`func (o *Sourcehealthdto) SetIqServiceVersion(v string)`

SetIqServiceVersion sets IqServiceVersion field to given value.

### HasIqServiceVersion

`func (o *Sourcehealthdto) HasIqServiceVersion() bool`

HasIqServiceVersion returns a boolean if a field has been set.

### SetIqServiceVersionNil

`func (o *Sourcehealthdto) SetIqServiceVersionNil(b bool)`

 SetIqServiceVersionNil sets the value for IqServiceVersion to be an explicit nil

### UnsetIqServiceVersion
`func (o *Sourcehealthdto) UnsetIqServiceVersion()`

UnsetIqServiceVersion ensures that no value is present for IqServiceVersion, not even an explicit nil
### GetStatus

`func (o *Sourcehealthdto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Sourcehealthdto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Sourcehealthdto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Sourcehealthdto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


