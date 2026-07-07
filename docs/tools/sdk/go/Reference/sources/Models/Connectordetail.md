---
id: v1-connectordetail
title: Connectordetail
pagination_label: Connectordetail
sidebar_label: Connectordetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectordetail', 'V1Connectordetail'] 
slug: /tools/sdk/go/sources/models/connectordetail
tags: ['SDK', 'Software Development Kit', 'Connectordetail', 'V1Connectordetail']
---

# Connectordetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The connector name | [optional] 
**Type** | Pointer to **string** | The connector type | [optional] 
**ClassName** | Pointer to **string** | The connector class name | [optional] 
**ScriptName** | Pointer to **string** | The connector script name | [optional] 
**ApplicationXml** | Pointer to **string** | The connector application xml | [optional] 
**CorrelationConfigXml** | Pointer to **string** | The connector correlation config xml | [optional] 
**SourceConfigXml** | Pointer to **string** | The connector source config xml | [optional] 
**SourceConfig** | Pointer to **NullableString** | The connector source config | [optional] 
**SourceConfigFrom** | Pointer to **NullableString** | The connector source config origin | [optional] 
**S3Location** | Pointer to **string** | storage path key for this connector | [optional] 
**UploadedFiles** | Pointer to **[]string** | The list of uploaded files supported by the connector. If there was any executable files uploaded to thee connector. Typically this be empty as the executable be uploaded at source creation. | [optional] 
**FileUpload** | Pointer to **bool** | true if the source is file upload | [optional] [default to false]
**DirectConnect** | Pointer to **bool** | true if the source is a direct connect source | [optional] [default to false]
**TranslationProperties** | Pointer to **map[string]interface{}** | A map containing translation attributes by loacale key | [optional] 
**ConnectorMetadata** | Pointer to **map[string]interface{}** | A map containing metadata pertinent to the UI to be used | [optional] 
**Status** | Pointer to **string** | The connector status | [optional] 

## Methods

### NewConnectordetail

`func NewConnectordetail() *Connectordetail`

NewConnectordetail instantiates a new Connectordetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectordetailWithDefaults

`func NewConnectordetailWithDefaults() *Connectordetail`

NewConnectordetailWithDefaults instantiates a new Connectordetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Connectordetail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Connectordetail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Connectordetail) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Connectordetail) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Connectordetail) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Connectordetail) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Connectordetail) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Connectordetail) HasType() bool`

HasType returns a boolean if a field has been set.

### GetClassName

`func (o *Connectordetail) GetClassName() string`

GetClassName returns the ClassName field if non-nil, zero value otherwise.

### GetClassNameOk

`func (o *Connectordetail) GetClassNameOk() (*string, bool)`

GetClassNameOk returns a tuple with the ClassName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassName

`func (o *Connectordetail) SetClassName(v string)`

SetClassName sets ClassName field to given value.

### HasClassName

`func (o *Connectordetail) HasClassName() bool`

HasClassName returns a boolean if a field has been set.

### GetScriptName

`func (o *Connectordetail) GetScriptName() string`

GetScriptName returns the ScriptName field if non-nil, zero value otherwise.

### GetScriptNameOk

`func (o *Connectordetail) GetScriptNameOk() (*string, bool)`

GetScriptNameOk returns a tuple with the ScriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptName

`func (o *Connectordetail) SetScriptName(v string)`

SetScriptName sets ScriptName field to given value.

### HasScriptName

`func (o *Connectordetail) HasScriptName() bool`

HasScriptName returns a boolean if a field has been set.

### GetApplicationXml

`func (o *Connectordetail) GetApplicationXml() string`

GetApplicationXml returns the ApplicationXml field if non-nil, zero value otherwise.

### GetApplicationXmlOk

`func (o *Connectordetail) GetApplicationXmlOk() (*string, bool)`

GetApplicationXmlOk returns a tuple with the ApplicationXml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationXml

`func (o *Connectordetail) SetApplicationXml(v string)`

SetApplicationXml sets ApplicationXml field to given value.

### HasApplicationXml

`func (o *Connectordetail) HasApplicationXml() bool`

HasApplicationXml returns a boolean if a field has been set.

### GetCorrelationConfigXml

`func (o *Connectordetail) GetCorrelationConfigXml() string`

GetCorrelationConfigXml returns the CorrelationConfigXml field if non-nil, zero value otherwise.

### GetCorrelationConfigXmlOk

`func (o *Connectordetail) GetCorrelationConfigXmlOk() (*string, bool)`

GetCorrelationConfigXmlOk returns a tuple with the CorrelationConfigXml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationConfigXml

`func (o *Connectordetail) SetCorrelationConfigXml(v string)`

SetCorrelationConfigXml sets CorrelationConfigXml field to given value.

### HasCorrelationConfigXml

`func (o *Connectordetail) HasCorrelationConfigXml() bool`

HasCorrelationConfigXml returns a boolean if a field has been set.

### GetSourceConfigXml

`func (o *Connectordetail) GetSourceConfigXml() string`

GetSourceConfigXml returns the SourceConfigXml field if non-nil, zero value otherwise.

### GetSourceConfigXmlOk

`func (o *Connectordetail) GetSourceConfigXmlOk() (*string, bool)`

GetSourceConfigXmlOk returns a tuple with the SourceConfigXml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceConfigXml

`func (o *Connectordetail) SetSourceConfigXml(v string)`

SetSourceConfigXml sets SourceConfigXml field to given value.

### HasSourceConfigXml

`func (o *Connectordetail) HasSourceConfigXml() bool`

HasSourceConfigXml returns a boolean if a field has been set.

### GetSourceConfig

`func (o *Connectordetail) GetSourceConfig() string`

GetSourceConfig returns the SourceConfig field if non-nil, zero value otherwise.

### GetSourceConfigOk

`func (o *Connectordetail) GetSourceConfigOk() (*string, bool)`

GetSourceConfigOk returns a tuple with the SourceConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceConfig

`func (o *Connectordetail) SetSourceConfig(v string)`

SetSourceConfig sets SourceConfig field to given value.

### HasSourceConfig

`func (o *Connectordetail) HasSourceConfig() bool`

HasSourceConfig returns a boolean if a field has been set.

### SetSourceConfigNil

`func (o *Connectordetail) SetSourceConfigNil(b bool)`

 SetSourceConfigNil sets the value for SourceConfig to be an explicit nil

### UnsetSourceConfig
`func (o *Connectordetail) UnsetSourceConfig()`

UnsetSourceConfig ensures that no value is present for SourceConfig, not even an explicit nil
### GetSourceConfigFrom

`func (o *Connectordetail) GetSourceConfigFrom() string`

GetSourceConfigFrom returns the SourceConfigFrom field if non-nil, zero value otherwise.

### GetSourceConfigFromOk

`func (o *Connectordetail) GetSourceConfigFromOk() (*string, bool)`

GetSourceConfigFromOk returns a tuple with the SourceConfigFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceConfigFrom

`func (o *Connectordetail) SetSourceConfigFrom(v string)`

SetSourceConfigFrom sets SourceConfigFrom field to given value.

### HasSourceConfigFrom

`func (o *Connectordetail) HasSourceConfigFrom() bool`

HasSourceConfigFrom returns a boolean if a field has been set.

### SetSourceConfigFromNil

`func (o *Connectordetail) SetSourceConfigFromNil(b bool)`

 SetSourceConfigFromNil sets the value for SourceConfigFrom to be an explicit nil

### UnsetSourceConfigFrom
`func (o *Connectordetail) UnsetSourceConfigFrom()`

UnsetSourceConfigFrom ensures that no value is present for SourceConfigFrom, not even an explicit nil
### GetS3Location

`func (o *Connectordetail) GetS3Location() string`

GetS3Location returns the S3Location field if non-nil, zero value otherwise.

### GetS3LocationOk

`func (o *Connectordetail) GetS3LocationOk() (*string, bool)`

GetS3LocationOk returns a tuple with the S3Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Location

`func (o *Connectordetail) SetS3Location(v string)`

SetS3Location sets S3Location field to given value.

### HasS3Location

`func (o *Connectordetail) HasS3Location() bool`

HasS3Location returns a boolean if a field has been set.

### GetUploadedFiles

`func (o *Connectordetail) GetUploadedFiles() []string`

GetUploadedFiles returns the UploadedFiles field if non-nil, zero value otherwise.

### GetUploadedFilesOk

`func (o *Connectordetail) GetUploadedFilesOk() (*[]string, bool)`

GetUploadedFilesOk returns a tuple with the UploadedFiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadedFiles

`func (o *Connectordetail) SetUploadedFiles(v []string)`

SetUploadedFiles sets UploadedFiles field to given value.

### HasUploadedFiles

`func (o *Connectordetail) HasUploadedFiles() bool`

HasUploadedFiles returns a boolean if a field has been set.

### SetUploadedFilesNil

`func (o *Connectordetail) SetUploadedFilesNil(b bool)`

 SetUploadedFilesNil sets the value for UploadedFiles to be an explicit nil

### UnsetUploadedFiles
`func (o *Connectordetail) UnsetUploadedFiles()`

UnsetUploadedFiles ensures that no value is present for UploadedFiles, not even an explicit nil
### GetFileUpload

`func (o *Connectordetail) GetFileUpload() bool`

GetFileUpload returns the FileUpload field if non-nil, zero value otherwise.

### GetFileUploadOk

`func (o *Connectordetail) GetFileUploadOk() (*bool, bool)`

GetFileUploadOk returns a tuple with the FileUpload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUpload

`func (o *Connectordetail) SetFileUpload(v bool)`

SetFileUpload sets FileUpload field to given value.

### HasFileUpload

`func (o *Connectordetail) HasFileUpload() bool`

HasFileUpload returns a boolean if a field has been set.

### GetDirectConnect

`func (o *Connectordetail) GetDirectConnect() bool`

GetDirectConnect returns the DirectConnect field if non-nil, zero value otherwise.

### GetDirectConnectOk

`func (o *Connectordetail) GetDirectConnectOk() (*bool, bool)`

GetDirectConnectOk returns a tuple with the DirectConnect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectConnect

`func (o *Connectordetail) SetDirectConnect(v bool)`

SetDirectConnect sets DirectConnect field to given value.

### HasDirectConnect

`func (o *Connectordetail) HasDirectConnect() bool`

HasDirectConnect returns a boolean if a field has been set.

### GetTranslationProperties

`func (o *Connectordetail) GetTranslationProperties() map[string]interface{}`

GetTranslationProperties returns the TranslationProperties field if non-nil, zero value otherwise.

### GetTranslationPropertiesOk

`func (o *Connectordetail) GetTranslationPropertiesOk() (*map[string]interface{}, bool)`

GetTranslationPropertiesOk returns a tuple with the TranslationProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationProperties

`func (o *Connectordetail) SetTranslationProperties(v map[string]interface{})`

SetTranslationProperties sets TranslationProperties field to given value.

### HasTranslationProperties

`func (o *Connectordetail) HasTranslationProperties() bool`

HasTranslationProperties returns a boolean if a field has been set.

### GetConnectorMetadata

`func (o *Connectordetail) GetConnectorMetadata() map[string]interface{}`

GetConnectorMetadata returns the ConnectorMetadata field if non-nil, zero value otherwise.

### GetConnectorMetadataOk

`func (o *Connectordetail) GetConnectorMetadataOk() (*map[string]interface{}, bool)`

GetConnectorMetadataOk returns a tuple with the ConnectorMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorMetadata

`func (o *Connectordetail) SetConnectorMetadata(v map[string]interface{})`

SetConnectorMetadata sets ConnectorMetadata field to given value.

### HasConnectorMetadata

`func (o *Connectordetail) HasConnectorMetadata() bool`

HasConnectorMetadata returns a boolean if a field has been set.

### GetStatus

`func (o *Connectordetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Connectordetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Connectordetail) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Connectordetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


