/**
 * Created with JetBrains WebStorm.
 * User: Ville
 * Date: 12.11.2013
 * Time: 10:50
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function() {
    $('#w1').load("js/w1.js", function() {
        $('pre').removeClass('prettyprinted');
        prettyPrint();
    });

    $('#w1tests').load("js/w1tests.js", function() {
        $('pre').removeClass('prettyprinted');
        prettyPrint();
    });

	$('#w2').load("js/w2.js", function() {
		$('pre').removeClass('prettyprinted');
		prettyPrint();
	})
        $('#w1final').load("js/w1final.js", function() {
		$('pre').removeClass('prettyprinted');
		prettyPrint();
	})
        $('#w2final').load("js/w2final.js", function() {
		$('pre').removeClass('prettyprinted');
		prettyPrint();
	})
        $('#w3final').load("js/w3final.js", function() {
		$('pre').removeClass('prettyprinted');
		prettyPrint();
	})
})
