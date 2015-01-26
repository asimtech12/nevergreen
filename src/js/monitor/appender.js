var $ = require('jquery')

module.exports = function (storageRepository, projects) {
    return {
        addProjects: function () {
            $('#projects').empty()
            projects.forEach(addBuildStatusToScreen)

            if (projects.length === 0) {
                showSuccessMessage(projects, storageRepository)
            }
        }
    }
}

function addBuildStatusToScreen(project) {
    $('#projects').append(
        '<li class="monitor-project monitor-' + project.prognosis + '">' +
        '<div class=monitor-outerContainer>' +
        '<div class=monitor-innerContainer>' + project.name +
        '</div>' +
        '</div>' +
        '</li>')
}

function showSuccessMessage(projects, storageRepository) {
    if (storageRepository.hasSuccessImageUrl()) {
        $('#projects')
            .append('<li><div class=monitor-outerContainer><div id="success-image" class="monitor-innerContainer" style="' +
            'background: url(' + storageRepository.getSuccessImageUrl() + ') no-repeat center center fixed;' +
            '-webkit-background-size: cover;' +
            '-moz-background-size: cover;' +
            '-o-background-size: cover;' +
            'background-size: cover;">' +
            '</div>' +
            '</div></li>')
    } else {
        $('#projects').append(
            '<li>' +
            '<div class=monitor-outerContainer>' +
            '<div id="success-text" class=monitor-innerContainer>' + storageRepository.getSuccessText() +
            '</div>' +
            '</div>' +
            '</li>')
    }
}