import rest.Book
import grails.util.Environment

class BootStrap {

    def init = { servletContext ->
    println "TESTE"
	seedTestData()
	}
    def destroy = {
    }

    private void seedTestData(){
	println "TEste2"
	def book = new Book(autor: 'Teste')
	assert book.save(failOnError:true, flush:true, insert: true)
	book.errors=null

    }
}
