let faqs = [{
        title: "Why shouldn't we trust atoms?",
        text: "They make up everything"
    },
    {
        title: "What do you call someone with no body and no nose?",
        text: "They make up everything"
    },
    {
        title: "What's the object-oriented way to become wealthy?",
        text: "They make up everything"
    },
    {
        title: "How many tickles does it take to tickle an octopus?",
        text: "ten-tickles!!!"
    },
    {
        title: "What is: 1 + 1?",
        text: "2"
    }
]

const faqContainer = document.querySelectorAll('.faq-container')[0];

function createFaq(obj) {
    let ques = document.createElement('div');
    ques.classList.add('faq');
    let title = document.createElement('h3');
    title.classList.add('faq-title')
    title.innerHTML = obj.title
    let toggle = document.createElement('button');
    toggle.classList.add('faq-toggle');
    toggle.innerHTML = '<i class = "fas fa-chevron-down" > </i> <i class = "fas fa-times" ></i>';
    toggle.addEventListener('click', function(e) {
        let parent = toggle.parentElement;
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            parent.classList.add('active');
        }
    })
    let text = document.createElement('p');
    text.classList.add('faq-text');
    text.innerHTML = obj.text
    ques.appendChild(title)
    ques.appendChild(toggle)
    ques.appendChild(text);
    return ques
}

faqs.forEach(val => {
    faqContainer.appendChild(createFaq(val));
});