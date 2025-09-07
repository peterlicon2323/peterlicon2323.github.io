AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true
});
feather.replace();

let editor;
function showCodeEditor(mode) {
    const modal = document.getElementById('codeEditorModal');
    const title = document.getElementById('editorTitle');
    const textarea = document.getElementById('codeEditor');
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    if (mode === 'yaml') {
        title.textContent = 'CV YAML';
        fetch('{{ config.download_links[1][1] }}')
            .then(response => response.text())
            .then(data => {
                if (!editor) {
                    editor = CodeMirror.fromTextArea(textarea, {
                        mode: 'yaml',
                        lineNumbers: true,
                        readOnly: true,
                        theme: 'default',
                        lineWrapping: true
                    });
                }
                editor.setValue(data);
                editor.refresh();
            });
    }
}

function hideCodeEditor() {
    document.getElementById('codeEditorModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}
