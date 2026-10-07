## OpenAPI

```yaml POST /access-model-metadata/v1/bulk-update/query
openapi: 3.0.1
info:
  title: Identity Security Cloud API
  description: Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
  termsOfService: https://developer.sailpoint.com/discuss/tos
  contact:
    name: Developer Relations
    url: https://developer.sailpoint.com/discuss/api-help
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  version: v1
servers:
  - url: https://{tenant}.api.identitynow.com
    description: This is the production API server.
    variables:
      tenant:
        default: sailpoint
        description: This is the name of your tenant, typically your company's name.
  - url: https://{apiUrl}
    description: This is the versioned API server.
    variables:
      apiUrl:
        default: sailpoint.api.identitynow.com
        description: This is the api url of your tenant
paths:
  /access-model-metadata/v1/bulk-update/query:
    post:
      description: Bulk update Access Model Metadata Attribute Values using a query
      operationId: updateAccessModelMetadataByQueryV1
      security:
        - userAuth:
            - idn:entitlement:manage
      requestBody:
        description: Attribute metadata bulk update request body.
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                query:
                  type: object
                  properties:
                    indices:
                      description: The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched.
                      externalDocs:
                        description: Learn more about search indices here.
                        url: https://documentation.sailpoint.com/saas/help/search/searchable-fields.html
                      type: array
                      items:
                        description: |-
                          Enum representing the currently supported indices.
                          Additional values may be added in the future without notice.
                        type: string
                        enum:
                          - accessprofiles
                          - accountactivities
                          - entitlements
                          - events
                          - identities
                          - roles
                          - '*'
                        example: identities
                        title: index
                      example:
                        - identities
                    queryType:
                      description: |-
                        The type of query to use.  By default, the `SAILPOINT` query type is used, which requires the `query` object to be defined in the request body.
                        To use the `queryDsl` or `typeAheadQuery` objects in the request, you must set the type to `DSL` or `TYPEAHEAD` accordingly.
                        Additional values may be added in the future without notice.
                      type: string
                      enum:
                        - DSL
                        - SAILPOINT
                        - TEXT
                        - TYPEAHEAD
                      default: SAILPOINT
                      example: SAILPOINT
                      title: querytype
                    queryVersion:
                      allOf:
                        - description: The current Elasticserver version.
                          type: string
                          default: '5.2'
                          example: '5.2'
                          title: elasticversion
                        - type: string
                          description: |-
                            The version of the query object.
                            This version number will map to the version of Elasticsearch for the query strings and objects being used.
                    query:
                      type: object
                      description: Query parameters used to construct an Elasticsearch query object.
                      properties:
                        query:
                          description: The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries.
                          type: string
                          example: name:a*
                        fields:
                          description: |-
                            The fields the query will be applied to.  Fields provide you with a simple way to add additional fields to search, without making the query too complicated.  For example, you can use the fields to specify that you want your query of "a*" to be applied to "name", "firstName", and the "source.name".  The response will include all results matching the "a*" query found in those three fields. 
                            A field's availability depends on the indices being searched.  For example, if you are searching "identities", you can apply your search to the "firstName" field, but you couldn't use "firstName" with a search on "access profiles".  Refer to the response schema for the respective lists of available fields. 
                          type: string
                          example:
                            - firstName,lastName,email
                        timeZone:
                          description: The time zone to be applied to any range query related to dates.
                          type: string
                          example: America/Chicago
                        innerHit:
                          description: The innerHit query object returns a flattened list of results for the specified nested type.
                          type: object
                          required:
                            - query
                            - type
                          properties:
                            query:
                              description: The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries.
                              type: string
                              example: source.name:\"Active Directory\"
                            type:
                              description: The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document "nested" within another document. For example, an identity can have nested documents for access, accounts, and apps.
                              type: string
                              example: access
                          title: innerhit
                      title: query
                    queryDsl:
                      description: The search query using the Elasticsearch [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html) syntax.
                      type: object
                      example:
                        match:
                          name: john.doe
                    textQuery:
                      type: object
                      description: Query parameters used to construct an Elasticsearch text query object.
                      required:
                        - terms
                        - fields
                      properties:
                        terms:
                          description: Words or characters that specify a particular thing to be searched for.
                          type: array
                          items:
                            type: string
                          example:
                            - The quick brown fox
                            - '3141592'
                            - '7'
                        fields:
                          description: The fields to be searched.
                          type: array
                          items:
                            type: string
                          example:
                            - displayName
                            - employeeNumber
                            - roleCount
                        matchAny:
                          description: Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found.
                          type: boolean
                          default: false
                          example: false
                        contains:
                          description: Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms.
                          type: boolean
                          default: false
                          example: true
                      title: textquery
                    typeAheadQuery:
                      type: object
                      description: 'Query parameters used to construct an Elasticsearch type ahead query object.  The typeAheadQuery performs a search for top values beginning with the typed values. For example, typing "Jo" results in top hits matching "Jo." Typing "Job" results in top hits matching "Job." '
                      required:
                        - query
                        - field
                      properties:
                        query:
                          description: The type ahead query string used to construct a phrase prefix match query.
                          type: string
                          example: Work
                        field:
                          description: The field on which to perform the type ahead search.
                          type: string
                          example: source.name
                        nestedType:
                          description: The nested type.
                          type: string
                          example: access
                        maxExpansions:
                          description: |-
                            The number of suffixes the last term will be expanded into.
                            Influences the performance of the query and the number results returned.
                            Valid values: 1 to 1000.
                          type: integer
                          format: int32
                          minimum: 1
                          maximum: 1000
                          default: 10
                          example: 10
                        size:
                          description: The max amount of records the search will return.
                          type: integer
                          format: int32
                          minimum: 1
                          default: 100
                          example: 100
                        sort:
                          description: The sort order of the returned records.
                          type: string
                          default: desc
                          example: asc
                        sortByValue:
                          description: The flag that defines the sort type, by count or value.
                          type: boolean
                          default: false
                          example: true
                      title: typeaheadquery
                    includeNested:
                      description: Indicates whether nested objects from returned search results should be included.
                      type: boolean
                      default: true
                      example: true
                    queryResultFilter:
                      type: object
                      description: Allows the query results to be filtered by specifying a list of fields to include and/or exclude from the result documents.
                      properties:
                        includes:
                          description: The list of field names to include in the result documents.
                          type: array
                          items:
                            type: string
                          example:
                            - name
                            - displayName
                        excludes:
                          description: The list of field names to exclude from the result documents.
                          type: array
                          items:
                            type: string
                          example:
                            - stacktrace
                      title: queryresultfilter
                    aggregationType:
                      description: |
                        Enum representing the currently available query languages for aggregations, which are used to perform calculations or groupings on search results.

                        Additional values may be added in the future without notice.
                      type: string
                      enum:
                        - DSL
                        - SAILPOINT
                      default: DSL
                      example: DSL
                      title: aggregationtype
                    aggregationsVersion:
                      allOf:
                        - description: The current Elasticserver version.
                          type: string
                          default: '5.2'
                          example: '5.2'
                          title: elasticversion
                        - type: string
                          description: |-
                            The version of the language being used for aggregation queries.
                            This version number will map to the version of Elasticsearch for the aggregation query object.
                    aggregationsDsl:
                      description: The aggregation search query using Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) syntax.
                      type: object
                      example: {}
                    aggregations:
                      description: |
                        The aggregation’s specifications, such as the groupings and calculations to be performed.
                      allOf:
                        - type: object
                          properties:
                            nested:
                              type: object
                              description: The nested aggregation object.
                              required:
                                - name
                                - type
                              properties:
                                name:
                                  description: The name of the nested aggregate to be included in the result.
                                  type: string
                                  example: id
                                type:
                                  description: The type of the nested object.
                                  type: string
                                  example: access
                              title: nestedaggregation
                            metric:
                              type: object
                              description: The calculation done on the results of the query
                              required:
                                - name
                                - field
                              properties:
                                name:
                                  description: |-
                                    The name of the metric aggregate to be included in the result.
                                    If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                                  type: string
                                  example: Access Name Count
                                type:
                                  description: |-
                                    Enum representing the currently supported metric aggregation types.
                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - COUNT
                                    - UNIQUE_COUNT
                                    - AVG
                                    - SUM
                                    - MEDIAN
                                    - MIN
                                    - MAX
                                  default: UNIQUE_COUNT
                                  example: COUNT
                                  title: metrictype
                                field:
                                  description: |
                                    The field the calculation is performed on.

                                    Prefix the field name with '@' to reference a nested object.
                                  type: string
                                  example: '@access.name'
                              title: metricaggregation
                            filter:
                              type: object
                              description: An additional filter to constrain the results of the search query.
                              required:
                                - name
                                - field
                                - value
                              properties:
                                name:
                                  description: The name of the filter aggregate to be included in the result.
                                  type: string
                                  example: Entitlements
                                type:
                                  description: |-
                                    Enum representing the currently supported filter aggregation types.
                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - TERM
                                  default: TERM
                                  example: TERM
                                  title: searchfiltertype
                                field:
                                  description: |
                                    The search field to apply the filter to.

                                    Prefix the field name with '@' to reference a nested object.
                                  type: string
                                  example: access.type
                                value:
                                  description: The value to filter on.
                                  type: string
                                  example: ENTITLEMENT
                              title: filteraggregation
                            bucket:
                              type: object
                              description: The bucket to group the results of the aggregation query by.
                              required:
                                - name
                                - field
                              properties:
                                name:
                                  description: The name of the bucket aggregate to be included in the result.
                                  type: string
                                  example: Identity Locations
                                type:
                                  description: |-
                                    Enum representing the currently supported bucket aggregation types.
                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - TERMS
                                  default: TERMS
                                  example: TERMS
                                  title: buckettype
                                field:
                                  description: |-
                                    The field to bucket on.
                                    Prefix the field name with '@' to reference a nested object.
                                  type: string
                                  example: attributes.city
                                size:
                                  description: Maximum number of buckets to include.
                                  type: integer
                                  format: int32
                                  example: 100
                                minDocCount:
                                  description: Minimum number of documents a bucket should have.
                                  type: integer
                                  format: int32
                                  example: 2
                              title: bucketaggregation
                          title: aggregations
                        - type: object
                          properties:
                            subAggregation:
                              description: Aggregation to be performed on the result of the parent bucket aggregation.
                              allOf:
                                - type: object
                                  properties:
                                    nested:
                                      type: object
                                      description: The nested aggregation object.
                                      required:
                                        - name
                                        - type
                                      properties:
                                        name:
                                          description: The name of the nested aggregate to be included in the result.
                                          type: string
                                          example: id
                                        type:
                                          description: The type of the nested object.
                                          type: string
                                          example: access
                                      title: nestedaggregation
                                    metric:
                                      type: object
                                      description: The calculation done on the results of the query
                                      required:
                                        - name
                                        - field
                                      properties:
                                        name:
                                          description: |-
                                            The name of the metric aggregate to be included in the result.
                                            If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                                          type: string
                                          example: Access Name Count
                                        type:
                                          description: |-
                                            Enum representing the currently supported metric aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - COUNT
                                            - UNIQUE_COUNT
                                            - AVG
                                            - SUM
                                            - MEDIAN
                                            - MIN
                                            - MAX
                                          default: UNIQUE_COUNT
                                          example: COUNT
                                          title: metrictype
                                        field:
                                          description: |
                                            The field the calculation is performed on.

                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: '@access.name'
                                      title: metricaggregation
                                    filter:
                                      type: object
                                      description: An additional filter to constrain the results of the search query.
                                      required:
                                        - name
                                        - field
                                        - value
                                      properties:
                                        name:
                                          description: The name of the filter aggregate to be included in the result.
                                          type: string
                                          example: Entitlements
                                        type:
                                          description: |-
                                            Enum representing the currently supported filter aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - TERM
                                          default: TERM
                                          example: TERM
                                          title: searchfiltertype
                                        field:
                                          description: |
                                            The search field to apply the filter to.

                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: access.type
                                        value:
                                          description: The value to filter on.
                                          type: string
                                          example: ENTITLEMENT
                                      title: filteraggregation
                                    bucket:
                                      type: object
                                      description: The bucket to group the results of the aggregation query by.
                                      required:
                                        - name
                                        - field
                                      properties:
                                        name:
                                          description: The name of the bucket aggregate to be included in the result.
                                          type: string
                                          example: Identity Locations
                                        type:
                                          description: |-
                                            Enum representing the currently supported bucket aggregation types.
                                            Additional values may be added in the future without notice.
                                          type: string
                                          enum:
                                            - TERMS
                                          default: TERMS
                                          example: TERMS
                                          title: buckettype
                                        field:
                                          description: |-
                                            The field to bucket on.
                                            Prefix the field name with '@' to reference a nested object.
                                          type: string
                                          example: attributes.city
                                        size:
                                          description: Maximum number of buckets to include.
                                          type: integer
                                          format: int32
                                          example: 100
                                        minDocCount:
                                          description: Minimum number of documents a bucket should have.
                                          type: integer
                                          format: int32
                                          example: 2
                                      title: bucketaggregation
                                  title: aggregations
                                - type: object
                                  properties:
                                    subAggregation:
                                      type: object
                                      properties:
                                        nested:
                                          type: object
                                          description: The nested aggregation object.
                                          required:
                                            - name
                                            - type
                                          properties:
                                            name:
                                              description: The name of the nested aggregate to be included in the result.
                                              type: string
                                              example: id
                                            type:
                                              description: The type of the nested object.
                                              type: string
                                              example: access
                                          title: nestedaggregation
                                        metric:
                                          type: object
                                          description: The calculation done on the results of the query
                                          required:
                                            - name
                                            - field
                                          properties:
                                            name:
                                              description: |-
                                                The name of the metric aggregate to be included in the result.
                                                If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results.
                                              type: string
                                              example: Access Name Count
                                            type:
                                              description: |-
                                                Enum representing the currently supported metric aggregation types.
                                                Additional values may be added in the future without notice.
                                              type: string
                                              enum:
                                                - COUNT
                                                - UNIQUE_COUNT
                                                - AVG
                                                - SUM
                                                - MEDIAN
                                                - MIN
                                                - MAX
                                              default: UNIQUE_COUNT
                                              example: COUNT
                                              title: metrictype
                                            field:
                                              description: |
                                                The field the calculation is performed on.

                                                Prefix the field name with '@' to reference a nested object.
                                              type: string
                                              example: '@access.name'
                                          title: metricaggregation
                                        filter:
                                          type: object
                                          description: An additional filter to constrain the results of the search query.
                                          required:
                                            - name
                                            - field
                                            - value
                                          properties:
                                            name:
                                              description: The name of the filter aggregate to be included in the result.
                                              type: string
                                              example: Entitlements
                                            type:
                                              description: |-
                                                Enum representing the currently supported filter aggregation types.
                                                Additional values may be added in the future without notice.
                                              type: string
                                              enum:
                                                - TERM
                                              default: TERM
                                              example: TERM
                                              title: searchfiltertype
                                            field:
                                              description: |
                                                The search field to apply the filter to.

                                                Prefix the field name with '@' to reference a nested object.
                                              type: string
                                              example: access.type
                                            value:
                                              description: The value to filter on.
                                              type: string
                                              example: ENTITLEMENT
                                          title: filteraggregation
                                        bucket:
                                          type: object
                                          description: The bucket to group the results of the aggregation query by.
                                          required:
                                            - name
                                            - field
                                          properties:
                                            name:
                                              description: The name of the bucket aggregate to be included in the result.
                                              type: string
                                              example: Identity Locations
                                            type:
                                              description: |-
                                                Enum representing the currently supported bucket aggregation types.
                                                Additional values may be added in the future without notice.
                                              type: string
                                              enum:
                                                - TERMS
                                              default: TERMS
                                              example: TERMS
                                              title: buckettype
                                            field:
                                              description: |-
                                                The field to bucket on.
                                                Prefix the field name with '@' to reference a nested object.
                                              type: string
                                              example: attributes.city
                                            size:
                                              description: Maximum number of buckets to include.
                                              type: integer
                                              format: int32
                                              example: 100
                                            minDocCount:
                                              description: Minimum number of documents a bucket should have.
                                              type: integer
                                              format: int32
                                              example: 2
                                          title: bucketaggregation
                                      title: aggregations
                                      description: Aggregation to be performed on the result of the parent bucket aggregation.
                              title: subsearchaggregationspecification
                      title: searchaggregationspecification
                    sort:
                      description: The fields to be used to sort the search results. Use + or - to specify the sort direction.
                      type: array
                      items:
                        type: string
                      example:
                        - displayName
                        - +id
                    searchAfter:
                      description: |-
                        Used to begin the search window at the values specified.
                        This parameter consists of the last values of the sorted fields in the current record set.
                        This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.
                        It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.
                        For example, when searching for identities, if you are sorting by displayName you will also want to include ID, for example ["displayName", "id"]. 
                        If the last identity ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last displayName is "John Doe", then using that displayName and ID will start a new search after this identity.
                        The searchAfter value will look like ["John Doe","2c91808375d8e80a0175e1f88a575221"]
                      type: array
                      items:
                        type: string
                      example:
                        - John Doe
                        - 2c91808375d8e80a0175e1f88a575221
                    filters:
                      description: The filters to be applied for each filtered field name.
                      type: object
                      additionalProperties:
                        type: object
                        properties:
                          type:
                            description: |-
                              Enum representing the currently supported filter types.
                              Additional values may be added in the future without notice.
                            type: string
                            enum:
                              - EXISTS
                              - RANGE
                              - TERMS
                            example: RANGE
                            title: filtertype
                          range:
                            type: object
                            description: The range of values to be filtered.
                            properties:
                              lower:
                                description: The lower bound of the range.
                                type: object
                                required:
                                  - value
                                properties:
                                  value:
                                    description: The value of the range's endpoint.
                                    type: string
                                    example: '1'
                                  inclusive:
                                    description: Indicates if the endpoint is included in the range.
                                    type: boolean
                                    default: false
                                    example: false
                                title: bound
                              upper:
                                description: The upper bound of the range.
                                type: object
                                required:
                                  - value
                                properties:
                                  value:
                                    description: The value of the range's endpoint.
                                    type: string
                                    example: '1'
                                  inclusive:
                                    description: Indicates if the endpoint is included in the range.
                                    type: boolean
                                    default: false
                                    example: false
                                title: bound
                            title: range
                          terms:
                            description: The terms to be filtered.
                            type: array
                            items:
                              type: string
                              example: account_count
                          exclude:
                            description: Indicates if the filter excludes results.
                            type: boolean
                            default: false
                            example: false
                        title: filter
                      example: {}
                  title: search
                operation:
                  type: string
                  description: Operation to perform on the attributes in the bulk update request.
                  enum:
                    - ADD
                    - REMOVE
                    - REPLACE
                  example: add
                replaceScope:
                  type: string
                  description: The choice of update scope.
                  enum:
                    - ALL
                    - ATTRIBUTE
                  example: attribute
                values:
                  description: The metadata to be updated, including attribute and values.
                  type: array
                  nullable: false
                  items:
                    type: object
                    required:
                      - attribute
                      - values
                    properties:
                      attribute:
                        type: string
                        description: the key of metadata attribute
                        example: iscFederalClassifications
                      values:
                        type: array
                        description: the values of attribute to be updated
                        items:
                          type: string
                          example: secret
                        nullable: true
                        example:
                          - secret
                  example:
                    - attribute: iscFederalClassifications
                      values:
                        - topSecret
                  title: bulkupdateammkeyvalue
              title: entitlementattributebulkupdatequeryrequest
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    description: ID of the task which is executing the bulk update.
                    example: 2c9180867817ac4d017817c491119a20
                  type:
                    type: string
                    description: Type of the bulk update object.
                    example: Role
                  status:
                    type: string
                    description: The status of the bulk update request, only list unfinished request's status.
                    enum:
                      - CREATED
                      - PRE_PROCESS
                      - PRE_PROCESS_COMPLETED
                      - POST_PROCESS
                      - COMPLETED
                      - CHUNK_PENDING
                      - CHUNK_PROCESSING
                      - RE_PROCESSING
                      - PRE_PROCESS_FAILED
                      - FAILED
                    example: CREATED
                  created:
                    type: string
                    description: Time when the bulk update request was created
                    format: date-time
                    example: '2020-10-08T18:33:52.029Z'
                title: accessmodelmetadatabulkupdateresponse
        '400':
          description: Client Error - Returned if the request body is invalid.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
        '401':
          description: Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: 'JWT validation failed: JWT is expired'
        '403':
          description: Forbidden - Returned if the user you are running as, doesn't have access to this end-point.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '403':
                  summary: An example of a 403 response object
                  value:
                    detailCode: 403 Forbidden
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server understood the request but refuses to authorize it.
        '429':
          description: Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    description: A message describing the error
                    example: ' Rate Limit Exceeded '
        '500':
          description: Internal Server Error - Returned if there is an unexpected error.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '500':
                  summary: An example of a 500 response object
                  value:
                    detailCode: 500.0 Internal Fault
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: An internal fault occurred.
components:
  securitySchemes:
    userAuth:
      type: oauth2
      x-displayName: Personal Access Token
      description: |
        OAuth2 Bearer token (JWT) generated using either a [personal access token (PAT)](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token) or through the [authorization code flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow).

        Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
        authorizationCode:
          authorizationUrl: https://example-tenant.login.sailpoint.com/oauth/authorize
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
    applicationAuth:
      type: oauth2
      x-displayName: Client Credentials
      description: |
        OAuth2 Bearer token (JWT) generated using [client credentials flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow).

        Client credentials refers to tokens that are not associated with a user in Identity Security Cloud.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
