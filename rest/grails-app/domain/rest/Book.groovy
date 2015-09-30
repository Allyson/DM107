package rest

import grails.rest.*

@ToString(includeNames = true, includeFields = true, excludes = 'dateCreated,lastUpdated,metaClass')
@EqualsAndHashCode
@Resource (uri='/books', formats=['json'])
class Book {
	String titulo
	String autor
	String editora
}
